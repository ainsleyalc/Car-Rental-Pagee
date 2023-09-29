import React from 'react';
import '../css/navBar.css'
  
const Navbar = () => {
  return (
    <>
      <nav className='NavContainer'>
    
            <ul className='navBar'       >
                <div className='left-Div'>
                    <img className='logo-img'  src='https://dreamsrent.dreamguystech.com/html/assets/img/logo.svg' />

                </div>









                <div className='MiddleDiv'>
                    <ul   className='MiddleNav'   >
                        <li>
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a href="/about">Listing</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>  

                    </ul>
                  
                </div>
                
   <div  className='right-div' >
        <ul className='right-nav' >
            <li>
            <a href="/signup" class="button">SIGNUP</a>
             </li>
             <li>
            <a href="/login" class="button">LOGIN</a>
            </li>
         </ul>
            </div>



                
            </ul>
         
        

      </nav>
    </>
  );
};
  
export default Navbar;