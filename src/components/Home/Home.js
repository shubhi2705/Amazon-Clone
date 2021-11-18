import React from 'react'
import Product from '../Product/Product'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg'/>
                <div className="home__rows">

                <div className='home__row'>
                    <Product />
                    <Product />
                </div>
                <div className='home__row'>
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className='home__row'>
                    <Product />    
                </div>
                </div>
              
            </div>
        </div>
    )
}

export default Home
