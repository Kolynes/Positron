import {Vue, Component, Prop, Watch} from "vue-property-decorator";
import PortalToolbar from "@/components/portaltoolbar/PortalToolbar.vue";
import AppFooter from "@/components/app-footer/AppFooter.vue";
import { owner } from '@/constants';
import startDots from "@/components/dots/dots";

@Component({
    components: {
        PortalToolbar,
        AppFooter
    }
})
export default class Home extends Vue {
    @Prop({type: String, default: owner})
    readonly r!: string;

    @Prop({type: String, default: "#"})
    readonly t!: string;

    timestamp: number = 0;
    showSocialMediaHandles: boolean = false;
    showSocialMediaHandlesCTA: boolean = false;
    readonly handles = [
        // {icon: "mdi-facebook", link: ""},
        {icon: "mdi-whatsapp", link: "https://wa.me/+17866554074"},
        {icon: "mdi-telegram", link: "https://t.me/PositronNetwork"},
        {icon: "mdi-instagram", link: "https://www.instagram.com/positron.live"},
    ]

    get countDown(): string[] {
        const now = new Date().getTime();
        const days = Math.floor((this.timestamp - now) / (3600 * 1000 * 24));
        const hours = Math.floor(((this.timestamp - now) % (3600 * 1000 * 24)) / (3600 * 1000));
        const minutes = Math.floor((((this.timestamp - now) % (3600 * 1000 * 24)) % (3600 * 1000)) / (60 * 1000));
        const seconds = Math.floor(((((this.timestamp - now) % (3600 * 1000 * 24)) % (3600 * 1000)) % (60 * 1000)) / 1000);
        return [days.toFixed(0), hours.toFixed(0), minutes.toFixed(0), seconds.toFixed(0)];
    }

    gotoHandle(handleLink: string) {
        window.location.href = handleLink;
        this.showSocialMediaHandles = false;
    }

    getTimestamp() {
        const xhr = new XMLHttpRequest();
        console.log(xhr)
        xhr.addEventListener("load", (): any => {
            this.timestamp = JSON.parse(xhr.responseText).timestamp;
            setInterval(() => this.timestamp--, 1000)
        });
        xhr.open("GET", "/timer");
        xhr.send()
    }

    @Watch("t")
    onTargetChanged() {
        console.log(this.t)
        if(this.t)
            this.$vuetify.goTo("#" + this.t);
        else this.$vuetify.goTo(0);
    }

    mounted() {
        this.getTimestamp()
        startDots();
        this.$vuetify.goTo("#" + this.t);
    }
}