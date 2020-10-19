import {Vue, Component, Prop} from "vue-property-decorator";
import Positron from "../../network/Positron";


@Component
export default class Level extends Vue {
    @Prop({type: Number, default: 1})
    readonly levelNumber!: number;

    loading: boolean = false;
    upgrading: boolean = false;
    slots: number = 0;

    callUpgrade() {

    }
    
    async mounted() {
        this.loading = true;
        var instance = await Positron.getInstance();
        this.slots = await instance.getLevel(this.levelNumber);
        this.loading = false;
    }
}
