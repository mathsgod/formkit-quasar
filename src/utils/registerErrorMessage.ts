import { FormKitNode } from "@formkit/core"
import { getValidationMessages } from "@formkit/validation"

export default (node: FormKitNode, error: any, errorMessage: any) => {

    function showErrorMessage(msg: any) {
        if (msg.name == "message-updated") {
            if (msg.payload.type == "validation") {
                errorMessage.value = msg.payload.value;
            }
        }

        if (msg.name == "message-removed") {
            if (msg.payload.type == "validation") {
                errorMessage.value = "";
                error.value = false;
            }
        }

        if (msg.name == "message-added") {
            errorMessage.value = "";
            error.value = false

            //get validation message

            const messages = getValidationMessages(node)

            for (const message of messages) {
                if (message[0]) {
                    errorMessage.value = message[1][0].value
                    error.value = true;
                    break
                }
            }
        }
    };

    node.on("message-added", showErrorMessage)
    node.on("message-removed", showErrorMessage)
    node.on("message-updated", showErrorMessage)



}