// import { red } from "@mui/material/colors";

export const initialState = {
    basket: [],
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount,item) => item.price + amount, 0);
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
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id)
            if(index >=0){
                newBasket.splice(index,1);

            }else {

                console.log("Don't have item to Remove ");
            }
            return {...state, basket:newBasket};
            break;
        default:    
            return state;

    }
}

// export const reducer;