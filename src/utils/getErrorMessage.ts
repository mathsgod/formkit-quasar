import { ref } from "vue";
import registerErrorMessage from "./registerErrorMessage";
export default (node: any) => {

    const error = ref(false);
    const errorMessage = ref("");
    registerErrorMessage(node, error, errorMessage);
    return {
        error,
        errorMessage
    }
}