import {Component, Vue, Ref} from "vue-property-decorator";
import VPasswordField from "@/vuetify-extensions/VPasswordField.vue";
import requiredRule from "@/utils/rules/requiredRule";
import http from "@/plugins/http";
import universalErrorHandler from '@/utils/universalErrorHandler';

@Component({
    components: {
        VPasswordField
    }
})
export default class SignIn extends Vue {
    username: string = "";
    password: string = "";
    error: string = "";
    signingIn: boolean = false;

    requiredRule = requiredRule;

    @Ref()
    signInForm!: {validate: () => boolean, reset: () => void};

    @universalErrorHandler
    async signIn() {
        if(this.signInForm.validate()){
            this.signingIn = true;
            var response = await http.getJson("/accounts/sign-in/", {
                username: this.username.trim(),
                password: this.password
            }, "POST");
            if(response.status)
                this.$router.push("/admin")
            else this.error = response.error as string
        }
    }
}