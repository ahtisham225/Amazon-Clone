// import { red } from "@mui/material/colors";

export const initialState = {
    basket: [],
};

export function reducer(state, action){
    // console.log('coming here');
    // console.log(action.type); 
    switch(action.type){
        case 'ADD_TO_BASKET':
            // LOGIC FOR ADDING INTO BASKET
            return {
                ...state,
                basket:[...state.basket,action.item]
            };
            // break;
        case 'REMOVE_FROM_BASKET':
            //REMOVING FROM BASKET 
            return {
                ...state,
                basket:[...state.basket,action.item]
            };
            break;
        default:
            return state;

    }
}

// export const reducer;