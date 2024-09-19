import React, { useEffect} from 'react'

import './addtocart.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrementquantity, handletotalprice, incrementquantity, removeFromcart } from '../../../redux/action/action'
import { Link} from 'react-router-dom'

const AddtoCart = () => {

  const cartlenght = useSelector((state) => state.toggler.cart)
    const totalPrices = useSelector((state) => state.toggler.totalPrice)


    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(handletotalprice())
    }, [dispatch])
    const incrementquantitys = (items) => {
        dispatch(incrementquantity(items))
    }
    const decrementquantitys = (items) => {
        dispatch(decrementquantity(items))
    }
    const removeFromcarts = (items) => {
        dispatch(removeFromcart(items))
    }
    const carts = useSelector((state) => state.toggler.cart)

    return (
        <div>
        
            <section className="cart">

                <div className="container">
                    <h2 className="text-center my-4  text-gray-800 font-semibold text-4xl ">Shopping Cart</h2>
                    <div className="cart-wrapper">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carts.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <img
                                                // src={item.thumbnail}
                                                src={item.thumbnail}
                                                className="img-fluid rounded-3"
                                                alt={item.name}
                                                style={{ width: 65 }}
                                            />
                                            <span className='description'>{item.title}</span>
                                        </td>
                                        <td>${item.price}</td>
                                        <td>
                                            <div className="btn-group" role="group" aria-label="Quantity control">
                                                <button type="button" className="btn btn-primary" onClick={() => decrementquantitys(item)}>-</button>

                                                <span className="btn btn-primary">{item.quantity}</span>
                                                <button type="button" className="btn btn-primary" onClick={() => incrementquantitys(item)}>+</button>
                                            </div>
                                        </td>
                                        <td>{(item.price * item.quantity).toFixed(2)}</td>
                                        <td>
                                            <button className="btn btn-danger btn-sm delete-btn" title='delet from cart' onClick={() => removeFromcarts(item)}>
                                                <i className="fas fa-times" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="text-right">
                            <h4>Total: {(totalPrices).toFixed(2)}</h4>
                            <Link to=  {cartlenght.length>0? "/checkoutpage":""}  > <button className="btn btn-success" title={cartlenght.length>0? "You can proceed to Checkout":" Your cart is empty "}>Go to Checkout
</button></Link>
                            
                        </div>
                    </div>
                </div>
            </section>
        

        </div>
    )
}

export default AddtoCart
