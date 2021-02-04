import {Component, Vue, Ref} from "vue-property-decorator";
import {namespace} from "vuex-class";
import requiredRule from '@/utils/rules/requiredRule';
import requiredLengthRule from "@/utils/rules/requiredLengthRule";
import rangeRule from '@/utils/rules/rangeRule';
import VScrollView from "@/vuetify-extensions/VScrollView.vue";

const AuthModule = namespace("AuthModule");

@Component({
    components: {
        VScrollView
    }
})
export default class Transactions extends Vue {
    showAddTransactionDialog: boolean = false;
    addingTransaction: boolean = false;
    destination: address = "";
    description: string = "";
    valueTRX: number = 0;
    valueUSDT: number = 0;
    showPendingTransactions: boolean = true;
    showExecutedTransactions: boolean = true;
    searchString: string = "";

    @AuthModule.State
    transactionCount!: number;

    @AuthModule.State
    transactions!: ITransaction[];

    @Ref()
    addTransactionForm!: {validate: () => boolean, reset: () => void}

    @AuthModule.Action
    getTransactions!: (payoad: {from: number, to: number, pending?: boolean, executed?: boolean}) => Promise<void>

    @AuthModule.Action
    addTransaction!: (payload: {destination: address, valueTRX: number, valueUSDT: number, description: string}) => Promise<void>

    @AuthModule.Action
    getTransactionCount!: (payload: {pending: boolean, executed: boolean}) => Promise<void>;
    
    requiredLengthRule = requiredLengthRule;

    requiredRule = requiredRule;

    rangeRule = rangeRule;

    transactionsFilter(transaction: ITransaction) {
        return (
                transaction.executed == this.showExecutedTransactions || 
                transaction.executed != this.showPendingTransactions
            ) &&
            (
                transaction.id.toString().includes(this.searchString) || 
                transaction.description.includes(this.searchString) || 
                transaction.destination.toString().includes(this.searchString) ||
                transaction.valueTRX.toString().includes(this.searchString) || 
                transaction.valueUSDT.toString().includes(this.searchString)
            )
    }

    async sendAddTransaction() {
        if(this.addTransactionForm.validate()) {
            this.addingTransaction = true;
            this.addTransaction({
                destination: this.destination,
                valueTRX: this.valueTRX,
                valueUSDT: this.valueUSDT,
                description: this.description
            }).finally(() => this.addingTransaction = false);
            this.showAddTransactionDialog = false;
            this.addTransactionForm.reset()
        }
    }

    mounted() {
        this.getTransactionCount({
            pending: true, 
            executed: true
        }).then(() => {
            if(this.transactionCount > 0) {
                var from = 0
                var to = this.transactionCount
                this.getTransactions({
                    from: from,
                    to: to
                });
            }
        });
    }

}