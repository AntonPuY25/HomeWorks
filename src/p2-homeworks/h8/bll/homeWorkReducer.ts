export type TypeStateReducer = {
    _id: number
    name: string
    age: number
}

export const AllActions = {
    ActionUp: {
        type: 'sort',
        payload: "up"
    } as const,
    ActionDown: {
        type: 'sort',
        payload: "down"
    } as const,
    ActionAge: {
        type: 'check',
        payload: 18
    } as const
}
type TypeTestAction<T> = T extends { [key: string]: infer U } ? U : never
type TypeActions = TypeTestAction<typeof AllActions>

export const homeWorkReducer = (state: TypeStateReducer[], action: TypeActions): TypeStateReducer[] => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1
                    }
                    return -1
                })]

            } else if (action.payload === 'down') {

                return [...state.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1
                    }
                    return 1
                })]
            }
            return state

        }
        case "check": {
            return state.filter(person => person.age >= 18)
        }

        default:
            return state
    }
};