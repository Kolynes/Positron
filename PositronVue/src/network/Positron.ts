import {} from "tronweb-typings";
import { contractAddress } from '@/constants';

export default class Positron {
    private static instance: Positron | null = null;
    private contract!: {[key: string]: any};

    private constructor() {
    }

    static async getInstance(): Promise<Positron> {
        if(Positron.instance == null) {
            Positron.instance = new Positron();
            Positron.instance.setContract(await window.tronWeb?.contract().at(contractAddress));
        }
        return Positron.instance;
    }

    setContract(contract: any) {
        this.contract = contract;
    }
    
    async register(uplineAddress: string): Promise<Array<any>> {
        try {
            return await this.contract.register(uplineAddress).send({
                callValue: 100e6,
                shouldPollResponse: true
            });
        } catch(e) {
            console.log(e);
            toast({message: "Transaction failed", icon: "mdi-exclamation-thick", iconColor: "red"});
            return [];
        }
    }

    async upgrade(callValue: number): Promise<any> {
        return await this.contract.upgrade().send({
            callValue,
            shouldPollResponse: true
        });
    }

    async getParticipantDetails(): Promise<Array<any>> {
        try {
            return await this.contract.getParticipantDetails().call();
        } catch(e) {
            console.log(e);
            toast({message: "This participant was not found", icon: "mdi-exclamation-thick", iconColor: "red"})
            return [];
        }
    }

    async getLevel(number: number): Promise<number> {
        try {
            var bigNumber = await this.contract.getLevel(number).call();
            return window.tronWeb?.BigNumber(bigNumber).toNumber()
        } catch(e) {
            console.log(e);
            return -1;
        }
    }

    async getSpillover(level: number): Promise<number> {
        try {
            var bigNumber = await this.contract.getSpillover(level).call();
            return window.tronWeb?.BigNumber(bigNumber).toNumber()
        } catch(e) {
            console.log(e);
            return -1;
        }
    }

    async getNumberOfParticipants(): Promise<number> {
        try {
            var bigNumber = await this.contract.numberOfParticipants().call();
            return window.tronWeb?.toBigNumber(bigNumber).toNumber();
        } catch(e) {
            console.log(e);
            return 0;
        }
    }

    async getLevelParticipants(level: number): Promise<number> {
        try {
            var bigNumber = await this.contract.getLevelParticipants(level).call();
            return window.tronWeb?.toBigNumber(bigNumber).toNumber();
        } catch(e) {
            console.log(e);
            return 0;
        }
    }

    async getLevelEarnings(level: number): Promise<number> {
        try {
            var bigNumber = await this.contract.getLevelEarnings(level).call();
            return window.tronWeb?.toBigNumber(bigNumber).toNumber();
        } catch(e) {
            console.log(e);
            return 0;
        }
    }

    async getLevelSpilloverEarnings(level: number): Promise<number> {
        try {
            var bigNumber = await this.contract.getLevelSpilloverEarnings(level).call();
            return window.tronWeb?.toBigNumber(bigNumber).toNumber();
        } catch(e) {
            console.log(e);
            return 0;
        }
    }

    async withdraw(amount: number): Promise<boolean> {
        try {
            var response = await this.contract.withdraw(amount).send({
                shouldPollResponse: true
            });
            return response[0];
        } catch(e) {
            console.log(e);
            return false;
        }
    }
}