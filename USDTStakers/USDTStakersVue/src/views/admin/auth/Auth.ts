import {Component, Vue} from "vue-property-decorator";
import Owners from "./Owners.vue";
import Transactions from "./Transactions.vue";

@Component({
    components: {
        Owners,
        Transactions
    }
})
export default class Auth extends Vue {
    tab: number = 0;
}