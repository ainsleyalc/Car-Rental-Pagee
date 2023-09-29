import React from "react";
import "../css/topDiv.css"
import carImage from '../css/car.png';
import nextImage from '../css/next.png'
const Home = () => {
return(
    <div>
         <div  className="backround-img">
            <div  className="container">
                <div  className="left-div" >
                    <div className="text-container">
                          <p>FIND YOUR <br/><span>DREAM CAR TODAY</span> </p>
                          
                     <button>VIEW ALL CARS <img src={nextImage} alt="Next" className="nextImage"/></button>
                    
                   
                    </div>
                  
                   
                </div>
                <div className="right-divs">
                    <img src={carImage}alt="ITS LOADING"  className="responsive-image"/>
                </div> 
            </div>
         
        </div>
        <div className="search-Bar">
            <div className="Bar">
                <p>this the search bar</p>
            </div>
            
        </div>
    </div>
       

)
}
export default Home