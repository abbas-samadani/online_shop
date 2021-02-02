import AttributeGroup from "../AttributeGroup"

interface CategoriesState {
    groups:AttributeGroup[]
}
export const initialState:CategoriesState = {
    groups : [
        {
            title: "مشخصات کلی",
            attributes : []
        }
    ]
}

interface Action {
    type : string,
    payload : any
}

export const reducer = (state:CategoriesState , action:Action): CategoriesState => {
    let newState:CategoriesState
    switch(action.type) {
        case 'ADD_ATTRIBUTE_CATEGORY':
            newState = {...state , groups:[...state.groups, {
                title: action.payload.title,
                attributes:[]
            } ]}
            break
        default :
            throw Error(`${action.type} is not defined in this state`)  
            break
    }
    return newState
}