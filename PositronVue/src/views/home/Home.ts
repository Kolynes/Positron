import {Vue, Component, Prop} from "vue-property-decorator";
import PortalToolbar from "@/components/portaltoolbar/PortalToolbar.vue";
import { owner } from '@/constants';

@Component({
    components: {
        PortalToolbar
    }
})
export default class Home extends Vue {
    @Prop({type: String, default: owner})
    readonly r!: string;

}