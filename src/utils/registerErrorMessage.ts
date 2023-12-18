import { FormKitNode } from "@formkit/core"
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
            if (msg.payload.type == "validation") {
                errorMessage.value = msg.payload.value;
                error.value = true;
            }
        }
    };

    node.on("message-added", showErrorMessage)
    node.on("message-removed", showErrorMessage)
    node.on("message-updated", showErrorMessage)



}