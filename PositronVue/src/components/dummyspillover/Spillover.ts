import {Vue, Component, Prop} from "vue-property-decorator";
import Positron from "../../network/Positron";


@Component
export default class Spillover extends Vue {
    @Prop({type: Number, default: 1})
    readonly levelNumber!: number;

    slots: number = 0;
    loading: boolean = false;
    interval!: any;
    
    mounted() {
        setInterval(() => this.slots == 4? this.slots = 0 : this.slots++, 1000);
    }

    destroyed() {
        clearInterval(this.interval);
    }
}