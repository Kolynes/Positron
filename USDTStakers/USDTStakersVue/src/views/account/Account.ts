import {Vue, Component} from "vue-property-decorator";
import {namespace} from "vuex-class";

const account = namespace("Account");

@Component
export default class Account extends Vue {

    @account.Action
    signOut!: () => void;

    callSignOut() {
        confirm({message: "Please confirm this action.", title: "Sign Out", icon: "mdi-power"}).then((value: boolean) => {
            if(value === true) {
                this.signOut()
                this.$router.replace("/")
            }
        });
    }
}