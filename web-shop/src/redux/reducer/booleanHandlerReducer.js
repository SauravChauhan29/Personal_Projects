import { ADD_TO_CART, REMOVE_FROM_CART, SET_DETAILS, IS_TRUE, IS_DETAILS_SET, INCREMENT_QUANTITY, DECREMENT_QUANTITY, READ_MORE_DETAILS, SHOW_PRODUCT_DETAILS } from "../action/action";


const initialState = {
    cart: [], //ADD_TO_CART
    details: "", // include its details getting and setting
    isshowingDetail: false,
    isCartPresent: true,
    isTrue: true, //include its toggle IS_TRUE
    Landingproducts: "",
    totalPrice: 0,
    readMoreDetail :[],
    showproductdetailtoggle: true
    
}


// i make this reusable function for to calculate total price
const calculateTotalPrice = (cart) => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

const toggler = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const isPresent = state.cart.find(item => item.id === action.payload.id);
            if (isPresent) return state;
            const updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
            return {
                ...state,
                cart: updatedCart,
                totalPrice: calculateTotalPrice(updatedCart)
            };
        }

        case REMOVE_FROM_CART: {
            const updatedCart = state.cart.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                cart: updatedCart,
                totalPrice: calculateTotalPrice(updatedCart)
            };
        }

        case SET_DETAILS: {
            return {
                ...state,
                details: action.payload,
                isshowingDetail: !state.isshowingDetail
            };
        }

        case IS_TRUE: {
            return {
                ...state,
                isTrue: !state.isTrue
            };
        }

        case IS_DETAILS_SET: {
            return {
                ...state,
                details: action.payload
            };
        }

        case INCREMENT_QUANTITY: {
            const updatedCart = state.cart.map(item => 
                item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            return {
                ...state,
                cart: updatedCart,
                totalPrice: calculateTotalPrice(updatedCart)
            };
        }

        case DECREMENT_QUANTITY: {
            const updatedCart = state.cart.map(item => 
                item.id === action.payload.id && item.quantity > 1 ? 
                { ...item, quantity: item.quantity - 1 } : item
            );
            return {
                ...state,
                cart: updatedCart,
                totalPrice: calculateTotalPrice(updatedCart)
            };
        }

        case READ_MORE_DETAILS: {
            return {
                ...state,
                readMoreDetail: { ...action.payload, quantity: 1 },
                showproductdetailtoggle: !state.showproductdetailtoggle
            };
        }
        case SHOW_PRODUCT_DETAILS: {
            return {
                ...state,
                showproductdetailtoggle: !state.showproductdetailtoggle
            };
        }
        default:
            return state;
    }
};

export default toggler;