import {Vue, Component, Prop, Watch} from "vue-property-decorator";
import PortalToolbar from "@/components/portaltoolbar/PortalToolbar.vue";
import DummyLevel from "@/components/dummylevel/Level.vue";
import DummySpillover from "@/components/dummyspillover/Spillover.vue";
import { owner } from '@/constants';
import startDots from "@/components/dots/dots";

@Component({
    components: {
        PortalToolbar,
        DummyLevel,
        DummySpillover
    }
})
export default class Home extends Vue {
    @Prop({type: String, default: owner})
    readonly r!: string;

    @Prop({type: String, default: "#"})
    readonly t!: string;

    @Watch("t")
    onTargetChanged() {
        console.log(this.t)
        if(this.t)
            this.$vuetify.goTo("#" + this.t);
        else this.$vuetify.goTo(0);
    }

    mounted() {
        startDots();
        this.$vuetify.goTo("#" + this.t);
    }
}