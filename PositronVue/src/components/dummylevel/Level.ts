import {Vue, Component, Prop} from "vue-property-decorator";
import Positron from "../../network/Positron";


@Component
export default class Level extends Vue {
    @Prop({type: Number, default: 1})
    readonly levelNumber!: number;

    loading: boolean = false;
    upgrading: boolean = false;
    slots: number = 0;
    interval!: any;

    callUpgrade() {

    }
    
    mounted() {
        this.interval = setInterval(() => this.slots == 6? this.slots = 0 : this.slots++, 1000);
    }

    destroyed() {
        clearInterval(this.interval);
    }
}
