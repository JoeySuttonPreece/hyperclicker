import { h } from "hyperapp"
import { actions } from "./actions.js"
import { constants } from "./constants.js"

export const view = (state) =>
<div>
    <div id="click-pane" onclick={actions.click}>
        <div id="value">
            {Math.floor(state.value)}
        </div>
    </div>
    <div class="divider"></div>
    <div id="upgrade-pane">
        {state.stats.highest == 0 ?
        <div id="tip">
            Click the number to increase it!
        </div>
        : null}
        {state.increasers.map((increaser, index) =>
        constants.increasers[index][1] <= state.stats.highest ?
        <div class="increaser" onclick={(state) => actions.buy(state, index)}>
            <div class="name-cost">
                <div>
                    {`Value increaser tier ${index + 1}`}
                </div>
                <div>
                    {`Costs: ${constants.increasers[index][1] * (increaser + 1)}`}
                </div>
            </div>
            <div class="amount">
                {increaser}
            </div>
        </div>
        : null
        )}
    </div>
</div>