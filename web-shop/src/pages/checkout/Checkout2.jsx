import React, { useState } from 'react';
import './checkOut.css';
import { useSelector } from 'react-redux';
// import { BorderTop } from '@mui/icons-material';

const Checkoutpages = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    paymentMethod: 'card',
  });

  const [cardNumber, setCardNumber] = useState(form.cardNumber);
  const [cardHolder, setCardHolder] = useState(form.name);
  const [expiryDate, setExpiryDate] = useState(form.expiry);



  const handleChange = (e) => {
    // const { name, value } = e.target;

    const name = e.target.name
    const value = e.target.value
    
    if (name === 'cardNumber' && value.length >16) {
      return;
    }
    if (name === 'expiry' && value.length >4 ) {
      return;
    }
    setForm({
      ...form,
      [name]: value,
    });
    //  console.log(form);


     if (name === 'cardNumber') {
      setCardNumber(value);
      console.log("Card cardNumber Updated:", value);  // Log the card number change
    }
     if (name === 'expiry') {
      setExpiryDate(value);
      console.log("Card exiry Updated:", value);  // Log the card number change
    }
  };

  const cart = useSelector((state) => state.toggler.cart)
  // console.log(cart)
  const Total = useSelector((state) => state.toggler.totalPrice)

  // let date = new Date()
  // let month = date.getMonth()
  // let year = date.getFullYear()

  // const todayDate = `${month}/${year}`
  // console.log(todayDate)


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', form);
  };

  return (
    <div className="main-container">
      <div className="left-containor-cheakout">
        <div className="checkout-container card-inputs">
          <h2 className='h2-custom'>Checkout</h2>
          <form onSubmit={handleSubmit} className="checkout-form">
            <h3 className='my-4  text-gray-800 font-semibold text-4xl '>Personal Details</h3>
            <label>Name</label>
            <input type="text" name="name" value={form.name} onChange={(e) => { handleChange(e); setCardHolder(e.target.value) }} required />

            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />

            <label>Address</label>
            <input type="text" name="address" value={form.address} onChange={handleChange} required />

            <label>City</label>
            <input type="text" name="city" value={form.city} onChange={handleChange} required />

            <label>Postal Code</label>
            <input type="text" name="postalCode" value={form.postalCode} onChange={(e) => { handleChange(e) }} required />

            <h3 className='my-4  text-gray-800 font-semibold text-4xl '>Payment Details :</h3>


            {/* Buying card replica */}
            <div className="golden-card-container ">
              {/* Golden ATM Card Design */}
              <div className="golden-card">
                <div className="card-chip"></div>
                <div className="card-number">
                  {cardNumber || '**** **** **** ****'}
                </div>
                <div className="card-details">
                  <div className="card-holder">
                    <span>Card Holder</span>
                    <div>{cardHolder || 'Your Name'}</div>
                  </div>
                  <div className="card-expiry">
                    <span>Expires</span>
                    <div>{expiryDate || 'MM/YY'}</div>
                  </div>
                </div>
              </div>
            </div>
            <label>Card Number</label>
            <input type="number"  name="cardNumber" value={form.cardNumber}  onChange={(e) => { handleChange(e)}} required />

            <label>Expiry</label>
            <input type="number" className='dates'  name="expiry" placeholder="MM/YY"  value={form.expiry} onChange={(e) => 
               handleChange(e)
            } required />

            <label>CVV</label>
            <input type="password" name="cvv" value={form.cvv} onChange={handleChange}  maxLength={3} required />

            <h3>Payment Method</h3>
            <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange}>
              <option value="card">Credit/Debit Card</option>
              {/* <option value="paypal">PayPal</option> */}
              {/* <option value="crypto">Cryptocurrency</option> */}
            </select>
          </form>
        </div>

        <button type="submit" className="checkout-btn">Checkout</button>

      </div >
      <div className="right-containor-cheakout">
<h2 className='h2-custom'> Your Total</h2>
        <div className="product-summary-container">
          {cart.map((product, index) => (
            <div className="product-summary" key={index}>
              <img src={product.images[0]} alt={product.name} loading='lazy' className="product-image" />
              <div className="product-details">
                <h4>{product.title}</h4>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>

              </div>
            </div>
          ))}
        </div>
        <h2 className=' h2-custom kalleo ' >Total amount : {(Total).toFixed(2)} </h2>
      </div>
    </div>
  );
};

export default Checkoutpages;
