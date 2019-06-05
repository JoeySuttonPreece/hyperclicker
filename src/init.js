import { constants } from "./constants.js"

export const init = () => {
    let state = {
        value: 0,
        clickPower: 1,
        stats: {
            highest: 0,
        },
        increasers: []
    }

    for (let i = 0; i < constants.increasers.length; i++) {
        state.increasers[i] = 0;
    }

    return state;
}