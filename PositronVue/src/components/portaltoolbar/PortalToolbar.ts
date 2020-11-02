import  {Vue, Component, Prop} from "vue-property-decorator";
import {namespace} from "vuex-class";
import Translator from "../translator/Translator.vue"
import {owner} from "../../constants";

const Root = namespace("Root");

@Component({
    components: {
        Translator
    }
})
export default class PortalToolbar extends Vue {
    @Prop({type: String, default: owner})
    readonly r!: string;

    readonly links: {[key: string]: string}[] = [
        {name: "Home", to: `/home?r=${this.r}`},
        {name: "How it Works", to: `/howItWorks?r=${this.r}`},
        {name: "Buy TRX Now!!", to: `/home?r=${this.r}&t=buy`},
    ]

    @Root.Mutation 
    toggleMinimized!: Function;
}