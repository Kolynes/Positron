import {Vue, Component} from "vue-property-decorator";
import {contractAddress} from "@/constants";
import {namespace} from "vuex-class";
import Level from "@/components/level/Level.vue";
import Spillover from "@/components/spillover/Spillover.vue";
import Positron from "@/network/Positron";

const account = namespace("Account");

@Component({
    components: {
        Level,
        Spillover
    }
})
export default class Home extends Vue {
    readonly contractAddress: string = contractAddress;
    balance: number = 0;
    levelEarnings: number[] = [0];
    levelSpilloverEarnings: number[] = [0]; 
    showEarningDetails: boolean = false;
    showParticipantsDetails: boolean = false;
    numberOfParticipants: number = 0;

    @account.State
    readonly currentParticipant!: IParticipant;

    async getParticipantBalance() {
        this.balance = (await window.tronWeb?.trx.getBalance(this.currentParticipant.address) as number) / 1e6 || this.balance;
    }

    get balanceDisplay() {
        return this.balance.toFixed(2);
    }

    get totalLevelEarningsDisplay() {
        return (this.levelEarnings.reduce((a, b) => a + b) || 0).toFixed(2);
    }

    get totalLevelSpilloverEarningsDisplay() {
        return (this.levelSpilloverEarnings.reduce((a, b) => a + b) || 0).toFixed(2);
    }

    get totalEarningsDisplay() {
        return (
            this.levelEarnings.reduce((a, b) => a + b) +
            this.levelSpilloverEarnings.reduce((a, b) => a + b)
        ).toFixed(2) || "0.00";
    }

    async mounted() {
        this.getParticipantBalance();
        const Positron = await Positron.getInstance();
        for(var i = 0; i < this.currentParticipant.currentLevel; i++)
            if(i == 0)
                this.levelEarnings = [await Positron.getLevelEarnings(i + 1)];
            else this.levelEarnings.push(await Positron.getLevelEarnings(i + 1));
        for(var i = 1; i < this.currentParticipant.currentLevel; i++)
            if(i == 0)
                this.levelSpilloverEarnings = [await Positron.getLevelSpilloverEarnings(i + 1)];
            else this.levelSpilloverEarnings.push(await Positron.getLevelSpilloverEarnings(i + 1));
    }
}