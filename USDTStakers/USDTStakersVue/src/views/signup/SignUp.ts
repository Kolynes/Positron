import {Vue, Component, Prop} from "vue-property-decorator";
import PortalToolbar from "@/components/portaltoolbar/PortalToolbar.vue";
import {contractAddress, owner} from "../../constants";
import {namespace} from "vuex-class";

const account = namespace("Account");

@Component({
    components: {
        PortalToolbar
    }
})
export default class SignUp extends Vue {
    @Prop({type: String, default: owner})
    readonly r!: string;
    
    readonly contractAddress: string = contractAddress;
    signingUp: boolean = false;

    @account.State
    currentParticipant!: IParticipant;

    @account.Action
    signUp!: (upline: string) => Promise<void>;

    async callSignUp() {
        this.signingUp = true;
        await this.signUp(this.r);
        this.signingUp = false;
        if(this.currentParticipant.address != "")
            this.$router.push("/account");
    }
}