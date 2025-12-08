import type { FormKitNode } from "@formkit/core"
import type { Ref } from "vue"
import { getValidationMessages } from "@formkit/validation"

export default (node: FormKitNode, error: Ref<boolean>, errorMessage: Ref<string>) => {
    const showErrorMessage = (msg: { name: string; payload: { type: string; value: string } }) => {
        if (msg.name === "message-updated") {
            if (msg.payload.type === "validation") {
                errorMessage.value = msg.payload.value
            }
        }

        if (msg.name === "message-removed") {
            if (msg.payload.type === "validation") {
                errorMessage.value = ""
                error.value = false
            }

            if (msg.payload.type === "state") {
                error.value = false
            }
        }

        if (msg.name === "message-added") {
            errorMessage.value = ""
            error.value = false

            const messages = getValidationMessages(node)

            for (const message of messages) {
                if (message[0]) {
                    errorMessage.value = message[1][0].value as string
                    error.value = true
                    break
                }
            }
        }
    }

    const events = ["message-added", "message-removed", "message-updated"] as const
    const receipts = events.map(event => node.on(event, showErrorMessage))

    return () => receipts.forEach(receipt => node.off(receipt))
}
