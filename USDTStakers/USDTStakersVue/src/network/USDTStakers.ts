import {} from "tronweb-typings";
import { USDTStakersAddress } from '@/constants';
import universalErrorHandler from '@/utils/universalErrorHandler';

class USDTStakers {
    private static instance: USDTStakers | null = null;
    private contract!: {[key: string]: any};

    private constructor() {
    }

    static async getInstance(): Promise<{[key: string]: any}> {
        if(USDTStakers.instance == null) {
            USDTStakers.instance = new USDTStakers();
            USDTStakers.instance.setContract(await window.tronWeb?.contract().at(USDTStakersAddress));
        }
        console.log(USDTStakers.instance.contract);
        return USDTStakers.instance.contract;
    }

    private setContract(contract: any) {
        this.contract = contract;
    }

    @universalErrorHandler
    async onDepositMade(fromAddress: string, refereeAddress: string): Promise<any[]> {
        return await this.contract.onDepositMade(fromAddress, refereeAddress).send({
            shouldPollResponse: true
        });
    }

    @universalErrorHandler    
    async withdrawProfit(index: number): Promise<any[]> {
        return await this.contract.withdrawProfit(index).send({
            shouldPollResponse: true
        });
    }

    @universalErrorHandler
    async redeemStake(index: number): Promise<any[]> {
        return await this.contract.redeemStake(index).send({
            shouldPollResponse: true
        });
    }

    @universalErrorHandler
    async getReferrals(staker: string): Promise<any[]> {
        return await this.contract.getReferrals(staker).call();
    }

    @universalErrorHandler
    async getStakes(staker: string): Promise<any[]> {
        return await this.contract.getStake(staker).call();
    }

    @universalErrorHandler
    async submitTransaction(destination: string, value: number, data: any[]): Promise<any[]> {
        return await this.contract.submitTransaction(destination, value, data).send({
            shouldPollResponse: true
        });
    }

    @universalErrorHandler
    async confirmTransaction(transactionId: number): Promise<any[]> {
        return await this.contract.confirmTransaction(transactionId).send({
            shouldPollResponse: true
        });
    }

    @universalErrorHandler
    async revokeConfirmation(transactionId: number): Promise<any[]> {
        return await this.contract.revokeConfirmation(transactionId).send({
            shouldPollResponse: true
        });
    }

    @universalErrorHandler
    async isConfirmed(transactionId: number): Promise<any[]> {
        return await this.contract.isConfirmed(transactionId).call();
    }
    
    @universalErrorHandler
    async getConfirmationCount(transactionId: number): Promise<any[]> {
        return await this.contract.getConfirmationCount(transactionId).call();
    }

    @universalErrorHandler
    async getConfirmations(transactionId: number): Promise<any[]> {
        return await this.contract.getConfirmations(transactionId).call();
    }

    @universalErrorHandler
    async getTransactionCount(transactionId: number): Promise<any[]> {
        return await this.contract.getTransactionCount(transactionId).call();
    }
}

export default USDTStakers.getInstance();