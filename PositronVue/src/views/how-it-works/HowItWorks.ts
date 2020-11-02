import {Vue, Component, Prop, Watch} from "vue-property-decorator";
import PortalToolbar from "@/components/portaltoolbar/PortalToolbar.vue";
import DummyLevel from "@/components/dummylevel/Level.vue";
import DummySpillover from "@/components/dummyspillover/Spillover.vue";
import AppFooter from "@/components/app-footer/AppFooter.vue";
import { owner } from '@/constants';

@Component({
    components: {
        PortalToolbar,
        DummyLevel,
        DummySpillover,
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