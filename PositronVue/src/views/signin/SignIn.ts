import {Vue, Component, Prop} from "vue-property-decorator";
import PortalToolbar from "@/components/portaltoolbar/PortalToolbar.vue";
import {namespace} from "vuex-class";
import { owner } from '@/constants';

const account = namespace("Account");

@Component({
    components: {
        PortalToolbar
    }
})
export default class SignIn extends Vue {
    @Prop({type: String, default: owner})
    readonly r!: string;

    signingIn: boolean = false;

    @account.State
    currentParticipant!: IParticipant;

    @account.Action
    signIn!: () => Promise<void>;

    get defaultWalletAddress(): any {
        return window.tronWeb?.defaultAddress.base58 || "";
    }

    async callSignIn() {
        this.signingIn = true;
        await this.signIn();
        this.signingIn = false;
        if(this.currentParticipant.address != "")
            this.$router.push("/account")
    }
}