import React from 'react'
import './Product.css'
const Product = () => {
    return (
        <div className='product__container'>
            <div className='product__info'>
                <p className='product__name'>The lean startup</p>
                <p className='product__price'>
                    <small>Rs.</small>
                    <strong>199.00</strong>
                </p>
                <div className='product__rating'>
                <span class="fa fa-star checked"> </span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>         
               </div>
             
            </div>
            <img  src='https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY327_FMwebp_QL65_.jpg'></img>
              <button className='product__btn'>Add to Basket</button>
        </div>
    )
}

export default Product
