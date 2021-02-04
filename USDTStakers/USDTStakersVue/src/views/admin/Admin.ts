import {Component, Vue} from "vue-property-decorator";
import PortalToolbar from "../../components/portaltoolbar/PortalToolbar.vue";
import {namespace} from "vuex-class";

const AuthModule = namespace("AuthModule");

interface ILink {
    to: string | null;
    click: Function | null;
    name: string;
    icon: string;
}

@Component({
    components: {
        PortalToolbar
    }
})
export default class Admin extends Vue {
    readonly links = <ILink[]>[
        {name: "Auth", icon: "mdi-account-outline", to: "/admin/auth"},
        {name: "Analytics", icon: "mdi-trending-up", to: "/admin/analytics"},
    ];

    @AuthModule.Getter
    currentAddressIsOwner!: boolean;

    @AuthModule.Action
    getOwners!: () => Promise<any>;

    async mounted() {
        await this.getOwners();
        if(!this.currentAddressIsOwner)
            this.$router.replace("/admin/sign-in")
    }
}