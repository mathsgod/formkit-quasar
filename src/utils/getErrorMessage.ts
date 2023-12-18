import { ref } from "vue";
import registerErrorMessage from "./registerErrorMessage";
import { FormKitNode } from "@formkit/core"
export default (node: FormKitNode) => {

    const error = ref(false);
    const errorMessage = ref("");
    registerErrorMessage(node, error, errorMessage);
    return {
        error,
        errorMessage
    }
}