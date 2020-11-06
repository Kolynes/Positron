import {Vue, Component, Prop} from "vue-property-decorator";
import Positron from "../../network/Positron";


@Component
export default class Level extends Vue {
    @Prop({type: Number, default: 1})
    readonly levelNumber!: number;

    loading: boolean = false;
    upgrading: boolean = false;
    referrals: number = 0;
    spillover: number = 0;
    interval!: any;

    callUpgrade() {

    }
    
    mounted() {
        this.interval = setInterval(() => {
            this.referrals == 6? this.referrals = 0 : this.referrals++;
            this.spillover == 4? this.spillover = 0 : this.spillover++;
        }, 1000);
    }

    destroyed() {
        clearInterval(this.interval);
    }
}
