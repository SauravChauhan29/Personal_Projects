// boolean value 
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const SET_DETAILS = "SET_DETAILS"
export const IS_DETAILS_SET = "IS_DETAILS_SET"
export const IS_TRUE = "IS_TRUE"
export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY"
export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY"
export const TOTAL_PRICE = "TOTAL_PRICE"
export const READ_MORE_DETAILS = "READ_MORE_DETAILS"
export const SHOW_PRODUCT_DETAILS = "SHOW_PRODUCT_DETAILS"


export const addToCart = (product) => (
    {
        type: ADD_TO_CART,
        payload: product
    })
export const removeFromcart = (productID) => (
    {
        type: REMOVE_FROM_CART,
        payload: productID
    })
export const setdetails = (details) => (
    {
        type: SET_DETAILS,
        payload: details
    })
export const landingPageTogggle2 = () => (
    {
        type: IS_TRUE,
      
    })
export const landingPageTogggle = (url) => (
    {
        type: IS_DETAILS_SET,
        payload: url

      
    })
export const decrementquantity = (item) => (
    {
        type: DECREMENT_QUANTITY,
        payload: item

      
    })
export const incrementquantity = (item) => (
    {
        type: INCREMENT_QUANTITY,
        payload: item

      
    })
export const handletotalprice = (item) => (
    {
        type: TOTAL_PRICE,
        payload: item
    })
export const readMoreDetails = (itemForDetail) => (
    {
        type: READ_MORE_DETAILS,
        payload: itemForDetail
    })
export const showProductDetail = () => (
    {
        type: SHOW_PRODUCT_DETAILS,
        
    })




