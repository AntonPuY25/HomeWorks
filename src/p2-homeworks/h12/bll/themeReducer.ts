export type TypeThemeState = {
    them: string
}

const initState: TypeThemeState = {
    them: 'some'
};
const CHANGE_THEME = 'themeReducer/CHANGE_THEME'
export const changeThemeAC = (theme: string) => {
    return {
        type: CHANGE_THEME,
        theme
    } as const
}
type TypeActionChangeTheme = ReturnType<typeof changeThemeAC>

export const themeReducer = (state: TypeThemeState = initState, action: TypeActionChangeTheme): TypeThemeState => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return {...state,
            them:action.theme
            };
        }
        default:
            return state;
    }
};
