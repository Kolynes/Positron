import {Vue, Component, Prop} from "vue-property-decorator";
import {owner} from "../../constants";

@Component
export default class Footer extends Vue {
    @Prop({type: String, default: owner})
    readonly r!: string;

    readonly links = [
        {to: `/home?r=${this.r}`, name: "Home"},
        {to: `/home?r=${this.r}&t=buy`, name: "Buy TRX Now!!"},
        {to: `/howItWorks?r=${this.r}`, name: "How It Works"},
    ];

    readonly contacts = [
        {icon: "mdi-whatsapp", click: "https://wa.me/+17866554074", name: "Positron Network"},
        {icon: "mdi-telegram", click: "https://t.me/PositronNetwork", name: "t.me/PositronNetwork"},
        {icon: "mdi-instagram", click: "https://instagram.com/positron.online?igshid=33adtn4dh3xr", name: "@positron.online"},
    ]

    gotoHandle(link: string) {
        window.location.href = link;
    }
}