import {Vue, Component} from "vue-property-decorator";
import en from "vuetify/src/locale/en";
import es from "vuetify/src/locale/es";
import fr from "vuetify/src/locale/fr";
import ru from "vuetify/src/locale/ru";
import ar from "vuetify/src/locale/ar";
import zh from "vuetify/src/locale/zh-Hans";
import ja from "vuetify/src/locale/ja";
import it from "vuetify/src/locale/it";
import id from "vuetify/src/locale/id";
import el from "vuetify/src/locale/el";

@Component
export default class Translator extends Vue {
    readonly langs = [
        {name: "English", click: () => this.$vuetify.lang.current = "en"},
        {name: "French", click: () => this.$vuetify.lang.current = "fr"},
    ]
    
}

