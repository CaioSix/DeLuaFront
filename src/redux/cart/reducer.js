import CartActionTypes from "./action-types";

const initialState = {
    products: [],
    productsTotalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case CartActionTypes.ADD_PRODUCT:
            const produtoNoCarrinho = state.products.some( 
                (produto) => produto.id === action.payload.id
            );

            if(produtoNoCarrinho){
                return{
                    ...state, 
                    products: state.products.map( (produto) => 
                    produto.id === action.payload.id
                    ? {...produto, quantity: produto.quantity + 1}
                    : produto ),
                };
            }

            return {
                ...state, 
                products : [...state.products, {...action.payload, quantity:  +1}],
            };
        case CartActionTypes.REMOVE_PRODUCT:
        return{
            ...state,
            products: state.products.filter(product => product.id !== action.payload)
        }

        case CartActionTypes.INCREASE_PRODUCT_QUANTITY:
        return{
            ...state,
            products: state.products.map( (produto) =>
            produto.id === action.payload 
            ? {...produto, quantity: produto.quantity + 1}
                : produto )
                
            
        }

        case CartActionTypes.DECREASE_PRODUCT_QUANTITY:
            return{
                ...state,
                products: state.products.map( (produto) =>
                produto.id === action.payload 
                ? {...produto, quantity: produto.quantity - 1}
                    : produto ).filter( product => product.quantity > 0),
            }


        default:
            return state;
    }

}

export default cartReducer