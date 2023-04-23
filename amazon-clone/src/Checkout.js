import React from 'react';
import {useStateValue} from './StateProvider'
import Header from './Header';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'
function Checkout(){
    const [{basket}] = useStateValue();
    return <div>
        <Header />
        <div className='checkout'>
        <div className='checkout_left'>
            
            <img className="checkout_image" src='https://www.shutterstock.com/shutterstock/photos/1161616900/display_1500/stock-photo-creative-flat-lay-top-view-back-to-school-concept-with-color-school-and-office-supplies-on-bright-1161616900.jpg'></img>
            <h1 className='header_title'>Checkout</h1>
            {basket?.length === 0 ? (
                <div>
                    <h2> Your Shopping Basket is empty </h2>
                </div>
            ):(
                <div>
                    <h2> Your Shopping Basket </h2>
                    {basket?.map(item =>(
                        <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                        />
                    ))}
                </div>
                )}
        </div>
        
            {basket.length > 0 &&(
                <div className='subtotal_right'>
                    <Subtotal />
                </div>)}
    </div>
    </div>
}

export default Checkout;