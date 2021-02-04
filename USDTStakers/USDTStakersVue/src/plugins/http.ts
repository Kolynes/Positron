import {Http} from "@/utils/http"
import Cookies from "@/utils/cookies";

const cookies = new Cookies();

export default new Http({
    headers: {
        "X-CSRFToken": () => cookies.get("csrftoken")
    }
});