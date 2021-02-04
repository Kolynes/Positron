import {VuexModule, Mutation, Module} from "vuex-module-decorators";

@Module({namespaced: true})
export default class RootModule extends VuexModule {
    minimized: boolean = false;

    @Mutation
    toggleMinimized() {
        this.minimized = !this.minimized;
    }
}