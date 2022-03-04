export type stateType = {
    _id?:string,
    title:string,
    description:string
};


export type actionType ={
    type:string,
    payload:stateType[]
}

const initialState:stateType[] = [];

export const reducer = (state:stateType[] = initialState, actions:actionType) => {
    switch(actions.type){
        case 'ADD': return state;
        case 'DELETE' : return state;
        case 'FETCH' :return state;
        case 'GET' : return actions.payload
        case 'UPDATE' : return state;
        default: return state

    }
}