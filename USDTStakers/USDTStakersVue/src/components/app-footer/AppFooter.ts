import {Vue, Component, Prop, Ref} from "vue-property-decorator";
import {owner} from "../../constants";
import startDots from '../dots/dots';

@Component
export default class Footer extends Vue {
    @Prop({type: String, default: owner})
    readonly r!: string;

    readonly links = [
        {to: `/home?r=${this.r}`, name: "Home"},
        // {to: `/home?r=${this.r}&t=buy`, name: "Buy TRX Now!!"},
        {to: `/howItWorks?r=${this.r}`, name: "How It Works"},
    ];

    readonly contacts = [
        // {icon: "mdi-whatsapp", click: "https://wa.me/+17866554074", name: "Positron Network"},
        {icon: "mdi-telegram", click: "https://t.me/PositronNetwork", name: "t.me/PositronNetwork"},
        {icon: "mdi-instagram", click: "https://www.instagram.com/positron.live/", name: "@positron.live"},
    ];

    @Ref()
    readonly emailForm!: {validate: Function};

    email: string = "";
    savingEmail: boolean = false;

    gotoHandle(link: string) {
        window.location.href = link;
    }

    saveEmail() {
        if(this.emailForm.validate()) {
            this.savingEmail = true;
            const xhr = new XMLHttpRequest();
            const data = new FormData();
            data.append("email", this.email);
            xhr.open("POST", "/save/email");
            xhr.onload = () => {
                toast({icon: "mdi-information", iconColor: "white", message: "Subscription Successful"});
                this.savingEmail = false;
            }
            xhr.send(data);
        }
    }
    
    emailRule(value: string) {
        if((value || "").length == 0){
            return "Email required!"
        }
        else if(!/^[a-zA-Z0-9]{3,}@[a-zA-Z0-9]{3,}\.[a-zA-Z0-9]{2,}$/.test(value || "")){
            return "invalid email"
        }
        else{
            return true
        }
    }

    mounted() {
        startDots("canvasfooter", "footer")
    }
}