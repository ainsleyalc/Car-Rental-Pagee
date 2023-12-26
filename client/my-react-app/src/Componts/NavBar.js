import React from 'react';
import '../css/navBar.css'
  
const Navbar = () => {
  return (
    <>
      <nav className='NavContainer'>
    
            <ul className='navBar'       >
                <div className='left-Div'>
                    <img className='logo-img'  src='https://t3.ftcdn.net/jpg/03/61/35/70/360_F_361357036_ULjReSkqZlkozXSNJofGgjFooO6Mpgg9.jpg' />

                </div>









                <div className='MiddleDiv'>
                    <ul   className='MiddleNav'   >
                        <li>
                            <a >Home</a>
                        </li>
                        <li>
                            <a >Listing</a>
                        </li>
                        <li>
                            <a >Contact</a>
                        </li>  

                    </ul>
                  
                </div>
                
   <div  className='right-div' >
        <ul className='right-nav' >
            <li>
            <a  className="button">SIGNUP</a>
             </li>
             <li>
            <a  className="button">LOGIN</a>
            </li>
         </ul>
            </div>



                
            </ul>
         
        

      </nav>
    </>
  );
};
  
export default Navbar;