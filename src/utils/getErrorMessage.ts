import { ref, onScopeDispose } from "vue"
import registerErrorMessage from "./registerErrorMessage"
import type { FormKitNode } from "@formkit/core"

export default (node: FormKitNode) => {
    const error = ref(false)
    const errorMessage = ref("")
    
    const cleanup = registerErrorMessage(node, error, errorMessage)
    onScopeDispose(cleanup)
    
    return {
        error,
        errorMessage
    }
}