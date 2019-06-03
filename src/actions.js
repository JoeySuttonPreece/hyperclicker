export const actions = {
    state: (state) => ({
        ...state,
    }),
    click: (state) => ({
        ...state,
        value: state.value + state.clickPower,
    })
}