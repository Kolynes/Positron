import { Module, VuexModule, Action, MutationAction, Mutation } from "vuex-module-decorators";
import USDTStakers from "@/network/USDTStakers";
import universalErrorHandler from '@/utils/universalErrorHandler';


@Module({ namespaced: true })
export default class AuthModule extends VuexModule {
    numberOfConfirmationsRequired: number = 0;
    owners: address[] = [];
    currentAddress: address | null = null;
    transactionCount: number = 0;
    transactions: ITransaction[] = [];

    get currentAddressIsOwner(): boolean {
        return !this.owners.every(owner => owner != this.currentAddress);
    }

    @Mutation
    setCurrentAddress() {
        this.currentAddress = window.tronWeb?.defaultAddress.base58 || null;
    }

    @MutationAction({ mutate: ["numberOfConfirmationsRequired"] })
    @universalErrorHandler
    async getNumberOfConfirmationsRequired() {
        const contract = await USDTStakers;
        const bigNumber = await contract.getRequired().call();
        return {
            numberOfConfirmationsRequired: window.tronWeb?.BigNumber(bigNumber._hex).toNumber()
        }
    }

    @MutationAction({ mutate: ["owners"] })
    @universalErrorHandler
    async getOwners() {
        const contract = await USDTStakers;
        return {
            owners: (await contract.getOwners().call()).map((hex: string) => window.tronWeb?.address.fromHex(hex))
        }
    }

    @MutationAction({ mutate: ["transactions"] })
    @universalErrorHandler
    async getTransactions(payload: {from: number, to: number, pending?: boolean, executed?: boolean}) {
        const contract = await USDTStakers;
        const ids: number[] = (await contract.getTransactionIds(payload.from, payload.to, payload.pending || true, payload.executed || true).call())._transactionIds
            .map((id: { _hex: number }) => window.tronWeb?.toDecimal(id._hex));
        const transactions: ITransaction[] = [];
        for(var id of ids) {
            var transactionArray: any[] = await contract.getTransaction(id).call();
            transactions.push({
                destination: window.tronWeb?.address.fromHex(transactionArray[0]),
                valueTRX: window.tronWeb?.toDecimal(transactionArray[1]),
                valueUSDT: window.tronWeb?.toDecimal(transactionArray[2]),
                data: transactionArray[3],
                description: transactionArray[4],
                executed: transactionArray[5],
                id,
            })
            
        }
        return {
            transactions: transactions.reverse()
        }
    }

    @Action
    @universalErrorHandler
    async addTransaction(payload: {destination: address, valueTRX: number, valueUSDT: number, description: string}) {
        const contract = await USDTStakers;
        var data: string = "";
        console.log(payload)
        if(payload.valueUSDT > 0) {
            data = window.tronWeb?.utils.abi.encodeParams(["bytes4", "address", "uint"], [
                (window.tronWeb?.sha3("tranferTether(address, uint)") as string).substring(0, 10),
                payload.destination,
                payload.valueUSDT
            ])
        }
        toast({message: "Transaction is being processed. Please wait.", icon: "mdi-information-outline", iconColor: "white"})
        const response = await contract.submitTransaction(payload.destination, payload.valueTRX, payload.valueUSDT, payload.description.trim(), data).send({
            shouldPollResponse: true
        });
        if(response.transactionId) {
            const transactionId = window.tronWeb?.toDecimal(response.transactionId._hex);  
            this.context.dispatch("getTransaction")
            toast({message: `Transaction #${transactionId} successful saved.`, icon: "mdi-information-outline", iconColor: "white"})
        }
        else toast({message: `Transaction failed.`, icon: "mdi-exclamation-thick", iconColor: "red"})
    }

    @MutationAction({mutate: ["transactionCount"]})
    @universalErrorHandler
    async getTransactionCount(payload: {pending: boolean, executed: boolean}) {
        const contract = await USDTStakers;
        const response = await contract.getTransactionCount(payload.pending, payload.executed).call();
        return {
            transactionCount: window.tronWeb?.toDecimal(response.count._hex),
        }
    }

    @Action
    @universalErrorHandler
    async addOwner() {}

}