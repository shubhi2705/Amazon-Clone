import React from 'react'
import Product from '../Product/Product'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg'/>
                <div className='home__rows'>
                <div className='home__row'>
                    <Product rating={4} title="The Lean Startup-How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price={1,150} image='https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY327_FMwebp_QL65_.jpg' />
                    <Product   rating={5} title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal with Sengled Bluetooth Color bulb" price={1918} image="https://m.media-amazon.com/images/I/7144xNeL4iS._AC_UY327_FMwebp_QL65_.jpg"/>
                </div>
                <div className='home__row'>
                    <Product  rating={5}/>
                    <Product  rating={3}/>
                    <Product  rating={3}/>
                </div>
                <div className='home__row'>
                    <Product  rating={4}/>    
                </div> 
                </div>
               
            </div>
        </div>
    )
}

export default Home
//