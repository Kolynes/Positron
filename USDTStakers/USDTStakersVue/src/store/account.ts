import {VuexModule, Module, Mutation, MutationAction, Action} from "vuex-module-decorators";
import Positron from "../network/USDTStakers"

@Module({namespaced: true})
export default class Account extends VuexModule {
    // currentParticipant: IParticipant = {
    //     address: "",
    //     currentLevel: 0
    // };
    
    // @Mutation
    // upgradeLevel() {
    //     this.currentParticipant.currentLevel++;
    // }

    // @MutationAction({mutate: ["currentParticipant"]})
    // async signIn() {
    //     var response = await (await Positron.getInstance()).getParticipantDetails();
    //     if(response[0]) {
    //         return {currentParticipant: <IParticipant>{
    //             address: window.tronWeb?.address.fromHex(response[1]),
    //             upline: window.tronWeb?.address.fromHex(response[2]),
    //             currentLevel: response[3],
    //             isOwner: response[4]
    //         }};
    //     }
    //     else if(response[0] === false){
    //         toast({message: "Participant does not exist", icon: "mdi-exclamation-thick", iconColor: "red"});
    //     }
    //     return {currentParticipant: {
    //         address: "",
    //         currentLevel: 0
    //     }};
    // }

    // @MutationAction({mutate: ["currentParticipant"]})
    // async signUp(upline: string) {
    //     var response = await (await Positron.getInstance()).register(upline);
    //     if(response[0]) {
    //         response = await (await Positron.getInstance()).getParticipantDetails();
    //         return {currentParticipant: <IParticipant>{
    //             address: window.tronWeb?.address.fromHex(response[1]),
    //             upline: window.tronWeb?.address.fromHex(response[2]),
    //             currentLevel: response[3],
    //             isOwner: response[4]
    //         }};
    //     }
    //     else if(response.length > 0) {
    //         toast({message: "Registration failed", icon: "mdi-exclamation-thick", iconColor: "red"});
    //     }
    //     return {currentParticipant: {
    //         address: "",
    //         currentLevel: 0
    //     }};
    // }

    // @Action
    // async upgrade(): Promise<boolean> {
    //     var response = await(await Positron.getInstance()).upgrade([
    //         100e6,
    //         250e6,
    //         650e6,
    //         1650e6,
    //         4150e6,
    //         10400e6,
    //         26000e6,
    //         65000e6
    //     ][this.currentParticipant.currentLevel || 0])
    //     if(response[0])
    //         this.context.commit("upgradeLevel");
    //     return response[0]
    // }

    // @MutationAction({mutate: ["currentParticipant"]})
    // async signOut() {
    //     return {currentParticipant: <IParticipant>{
    //         address: "",
    //         currentLevel: 0,
    //         upline: "",
    //         isOwner: false
    //     }};
    // }
}