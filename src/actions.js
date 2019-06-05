import { constants } from "./constants.js"

export const actions = {
    state: (state) => ({
        ...state,
    }),
    click: (state) => {
        return actions.setValue(state, state.value + state.clickPower);
    },
    setValue: (state, value) => ({
        ...state,
        value: value,
        stats: {
            ...state.stats,
            highest: Math.max(state.stats.highest, value),
        }
    }),
    buy: (state, index) => {
        let cost = constants.increasers[index][1] * (state.increasers[index] + 1);
        
        if (state.value >= cost) {
            let increasers = [...state.increasers];
            
            increasers[index] += 1;
            
            return {
                ...state,
                increasers: increasers,
                value: state.value - cost,
            }
        } else {
            return state;
        }
    }
}