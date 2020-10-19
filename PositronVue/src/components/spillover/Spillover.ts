import {Vue, Component, Prop} from "vue-property-decorator";
import Positron from "../../network/Positron";


@Component
export default class Spillover extends Vue {
    @Prop({type: Number, default: 1})
    readonly levelNumber!: number;

    slots: number = 0;
    loading: boolean = false;
    
    async mounted() {
        this.loading = true;
        var instance = await Positron.getInstance();
        this.slots = await instance.getSpillover(this.levelNumber);
        this.loading = false;
    }
}