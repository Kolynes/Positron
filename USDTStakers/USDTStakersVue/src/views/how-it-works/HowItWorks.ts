import {Vue, Component, Prop, Watch} from "vue-property-decorator";
import PortalToolbar from "@/components/portaltoolbar/PortalToolbar.vue";
import AppFooter from "@/components/app-footer/AppFooter.vue";
import { owner } from '@/constants';


@Component({
    components: {
        PortalToolbar,
        AppFooter
    }
})
export default class Home extends Vue {
    @Prop({type: String, default: owner})
    readonly r!: string;

    levelTab: number = 0;
    showSocialMediaHandles: boolean = false;
    readonly handles = [
        {icon: "mdi-facebook", link: ""},
        {icon: "mdi-whatsapp", link: ""},
        {icon: "mdi-telegram", link: ""},
        {icon: "mdi-instagram", link: ""},
    ]

    mounted() {
        this.$vuetify.goTo(0);
    }

}