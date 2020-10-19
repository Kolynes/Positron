import  {Vue, Component, Prop} from "vue-property-decorator";
import {namespace} from "vuex-class";
import {owner} from "../../constants";

const Root = namespace("Root");

@Component
export default class PortalToolbar extends Vue {
    @Prop({type: String, default: owner})
    readonly r!: string;

    readonly links: {[key: string]: string}[] = [
        {name: "Home", to: `/home?r=${this.r}`},
        {name: "How it Works", to: `/howItWorks?r=${this.r}`},
        {name: "Get Started", to: `/signUp?r=${this.r}`},
        {name: "Sign In", to: `/signIn?r=${this.r}`},
    ]

    @Root.Mutation 
    toggleMinimized!: Function;
}