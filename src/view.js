import { h } from "hyperapp"
import { actions } from "./actions.js"

export const view = (state) =>
<div>
    <div id="name">
        Value
    </div>
    <div id="value" onclick={actions.click}>
        {state.value}
    </div>
    {state.value == 0 ?
    <div id="tip">
        Click the number to increase it.
    </div> :
    null
    }
</div>