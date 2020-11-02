import {Vue, Component, Prop, Watch} from "vue-property-decorator";
import PortalToolbar from "@/components/portaltoolbar/PortalToolbar.vue";
import AppFooter from "@/components/app-footer/AppFooter.vue";
import startDots from "@/components/dots/dots";


@Component({
    components: {
        PortalToolbar,
        AppFooter
    }
})
export default class Error404 extends Vue {
    mounted() {
        startDots()
    }
}