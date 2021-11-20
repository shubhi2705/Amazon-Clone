import React from 'react'
import './Product.css'
const Product = ({rating,title,image,price}) => {
    return (
        <div className='product__container'>
            <div className='product__info'>
                <p className='product__name'>{title}</p>
                <p className='product__price'>
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                {
                Array(rating)
                .fill()
                .map((_,i)=>(
                <span class="fa fa-star checked"> </span>
                ))}
                       
               </div>
             
            </div>
            <img  src={image}></img>
              <button className='product__btn'>Add to Basket</button>
        </div>
    )
}

export default Product
