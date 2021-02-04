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
export default class Owners extends Vue {
    showAddOwnerDialog: boolean = false;
    addingOwner: boolean = false;
    newOwner: address = "";
    newRequirements: number | null = null;

    @AuthModule.State
    numberOfConfirmationsRequired!: number;

    @AuthModule.State
    owners!: address[];

    @Ref()
    addOwnerForm!: {validate: () => boolean, reset: () => void}

    @Ref()
    changeConfirmationRequirementsForm!: {validate: () => boolean, reset: () => void}

    @AuthModule.Action
    getNumberOfConfirmationsRequired!: () => Promise<void>

    @AuthModule.Action
    getOwners!: () => Promise<void>
    
    requiredLengthRule = requiredLengthRule;

    requiredRule = requiredRule;

    rangeRule = rangeRule;

    async addOwner() {

    }

    async removeOwner(index: number) {
        
    }

    async replaceOwner(index: number) {

    }

    async changeConfirmationRequirements() {

    }

    mounted() {
        this.getNumberOfConfirmationsRequired().then(() => {
            this.newRequirements = this.numberOfConfirmationsRequired || null;
        });
    }

}