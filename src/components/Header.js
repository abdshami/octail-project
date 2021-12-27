
import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css"


const Header = () => {
    return(
        <div>
        
            <header className="header">
                <div>
                    <h1>
                        <Link to="/" className='logo'>T-shirts Shop</Link>
                    </h1>
                </div>

                <div className='h-links'>
                    <ul>
                        <li>
                            <Link to="/" >Home</Link> 
                        </li>
                        <li>
                             <Link to="/Cart"  >
                                 <i className ="fas fa-shopping-cart"></i>
                            </Link>
                        </li>

                        
                    </ul>

                </div>
            </header> 
        </div>
    )
}
export default Header;
