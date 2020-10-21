import {Vue, Component, Ref, Watch} from "vue-property-decorator";
import {contractAddress} from "@/constants";
import {namespace} from "vuex-class";
import Level from "@/components/level/Level.vue";
import Spillover from "@/components/spillover/Spillover.vue";
import Positron from "@/network/Positron";
import Vuetify from 'vuetify/lib';

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
    contractBalance: number = 0;
    levelEarnings: number[] = [0];
    levelSpilloverEarnings: number[] = [0]; 
    levelParticipants: number[] = [0];
    showEarningDetails: boolean = false;
    showParticipantsDetails: boolean = false;
    numberOfParticipants: number = 0;
    showTransferDialog: boolean = false;
    transfering: boolean = false;
    transferAmount: number = 0;

    @Ref("transferForm")
    transferForm!: {validate: () => boolean}

    @account.State
    readonly currentParticipant!: IParticipant;

    transferRule(value: number): boolean | string {
        return value < this.contractBalance || "Insufficient balance";
    }

    async getParticipantBalance() {
        this.balance = (await window.tronWeb?.trx.getBalance(this.currentParticipant.address) as number) / 1e6 || this.balance;
    }

    async getContractBalance() {
        this.contractBalance = (await window.tronWeb?.trx.getBalance(contractAddress) as number) / 1e6 || this.contractBalance;
    }

    async getNumberOfParticipants() {
        this.numberOfParticipants = await (await Positron.getInstance()).getNumberOfParticipants();
    }

    async transfer() {
        if(this.transferForm.validate()) {
            this.transfering = true;
            var instance = await Positron.getInstance();
            var response = await instance.withdraw(this.transferAmount);
            console.log(response);
            this.transfering = false;
            if(response)
                toast({message: "Transfer successful", icon: "mdi-information", iconColor: "white"});
            else toast({message: "Transfer failed", icon: "mdi-exclamation-thick", iconColor: "red"});
        }
    }

    get balanceDisplay() {
        return this.balance.toFixed(2);
    }

    get contractBalanceDisplay() {
        return this.contractBalance.toFixed(2);
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

    @Watch("transfering")
    onTransferingChanged() {
        if(!this.transfering) {
            this.showTransferDialog = false;
            this.transferAmount = 0;
        }
    }

    async mounted() {
        this.getParticipantBalance();
        this.getContractBalance();
        this.getNumberOfParticipants();
        const positron: Positron = await Positron.getInstance();
        for(var i = 0; i < 8; i++)
            if(i == 0)
                this.levelParticipants = [await positron.getLevelParticipants(i + 1)];
            else this.levelParticipants.push(await positron.getLevelParticipants(i + 1));
        for(var i = 0; i < this.currentParticipant.currentLevel; i++)
            if(i == 0)
                this.levelEarnings = [await positron.getLevelEarnings(i + 1)];
            else this.levelEarnings.push(await positron.getLevelEarnings(i + 1));
        for(var i = 1; i < this.currentParticipant.currentLevel; i++)
            if(i == 0)
                this.levelSpilloverEarnings = [await positron.getLevelSpilloverEarnings(i + 1)];
            else this.levelSpilloverEarnings.push(await positron.getLevelSpilloverEarnings(i + 1));
    }
}