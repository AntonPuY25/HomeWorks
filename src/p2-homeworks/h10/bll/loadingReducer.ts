const initState = {
    loading:false
};
export type TypeStateLoadingReducer = {
    loading:boolean
}
const changeLoading = '/loadingReducer/CHANGE_LOADING'
export const loadingReducer = (state:TypeStateLoadingReducer = initState, action: TypeActions): TypeStateLoadingReducer => { // fix any
    switch (action.type) {
        case changeLoading: {
            return {...state,
            loading:!state.loading
            }
        }
        default: return state;
    }
};


type TypeActions = TypeLoadingAC;
type TypeLoadingAC = ReturnType <typeof loadingAC>
export const loadingAC = () => {
    return{
        type:changeLoading
    } as const
};