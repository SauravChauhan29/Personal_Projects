import React, { useState } from 'react';
import './productdetail.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, showProductDetail } from '../../redux/action/action';
const ProductDetailPage = () => {
  const [showImg,setshowimg]=useState(0)

  const dispatch = useDispatch()
  const addToCarts = (items) => {
    dispatch(addToCart(items))
  }

  // const showdetail = useSelector((state) => state.toggler.showproductdetailtoggle)
  const productdetail = useSelector((state) => state.toggler.readMoreDetail)
  if (!productdetail) {
    return <div>Loading...</div>;
  }
  const showproductdetails = () => {
    dispatch(showProductDetail());
  };
  
  return (
    <div className="product-detail">
      <span className='cross' onClick={() => showproductdetails()}><i className="fa-solid fa-x"></i></span>
      <h1>{productdetail.title}</h1>
      <div className="detail-wrapper">
        <div className="right-detail"><img src={productdetail.images && productdetail.images[showImg]} alt={productdetail.title} loading='lazy' />
        <div className="more-images">
          {
            productdetail.images && productdetail.images.map((images, index) => (<div key={images.id} onClick={()=> setshowimg(index)} className='sub-images rounded-3xl'>
              <img src={images} height="100%" alt=""  loading='lazy' />
            </div>))
          }
        </div>

        </div>

        <div className="left-detail">
          <div className="main-left-detail">
            <p>{productdetail.description}</p>
            <p>Price: ${productdetail.price}</p>
            <p>Rating: <span className="icon-yellow">★</span>  {productdetail.rating}/5</p>
          </div>
          <button className="addtocart" onClick={() => addToCarts(productdetail)}  > <i className="fa-solid fa-cart-plus"
            style={{ paddingRight: "10px" }}></i >Add To Cart</button>
          <div className="reviews">
            <h2>Reviews:</h2>
            {productdetail.reviews && productdetail.reviews.length > 0 ? (
              productdetail.reviews.map((review, index) => (
                <div key={index}>
                  <p>{review.reviewerName}: {review.rating}/5</p>
                  <p>{review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
