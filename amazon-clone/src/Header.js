import React from 'react'
import "./Header.css"
import {Link } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { useStateValue } from './StateProvider'
function Header() {
    const [{basket}] = useStateValue();
  return (
    <nav className='header'>

        {/* logo */}
            <Link to="/">
                <img className='header_logo' src='https://i0.wp.com/manchesterbizfair.co.uk/wp-content/uploads/2021/10/amazon-logo.png?resize=768%2C231&ssl=1' alt=''/>
            </Link>
        {/* Search */}
        <div className='header_search'>

            <input type="text" className = "header_searchInput"></input>
            <SearchIcon className='header_searchIcon'/>
         
        </div>


        {/* Header navigation */}
        <div className='header_navigation'>
            {/* 1st ling */}
            <Link className='header_nav_link' to='/login' >
                <div className='header_options'>
                    <span className='header_optionsLine1'>
                        Hello, ...
                    </span>
                    <span className='header_optionsLine2'>
                        Sign in 
                    </span>
                </div>
            </Link>

            {/* 2nd Link */}
            <Link className='header_nav_link' to='/login' >
                <div className='header_options'>
                    <span  className='header_optionsLine1'>
                        Returns
                    </span>
                    <span className='header_optionsLine2'>
                        & Orders 
                    </span>
                </div>
            </Link>  


            {/* 3rd Link */}
            <Link className='header_nav_link' to='/login' >
                <div className='header_options'>
                    <span  className='header_optionsLine1'>
                        Your 
                    </span>
                    <span  className='header_optionsLine2'>
                        Prime 
                    </span>
                </div>
            </Link>  
            {/* 4th Link */}
            <Link className='header_nav_link' to='/login' >
                <div className='header_optionsBasket'>

                    <ShoppingBasketIcon/>
                    <span className='numberOfItemsInCart'>
                        {basket?.length} 
                    </span>
                    
                </div>
            </Link>  


        </div>
    </nav>
  )
}

export default Header