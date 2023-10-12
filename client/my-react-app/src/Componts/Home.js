import React, { useState, useEffect } from "react";
import "../css/topDiv.css"
import carImage from '../css/car.png';
import nextImage from '../css/next.png'
import locationIcon from '../css/location.png'
import searchBar from "./SearchBar"
import "../css/Secound-div.css"
import "../css/thirdDiv.css"
import SearchBar from "./SearchBar";
import Card from "./Card"
import "../css/fourthDiv.css"
const Home = () => {
    const vehicleLink =  "https://car-rental-template.onrender.com/vehicles"
    const [cars, setCars] = useState([])
    useEffect(() => {
          fetch(vehicleLink).then(response => response.json())
          .then((data) => {
             setCars(data)
             console.log(cars)
          })
          .catch(error => {
            console.error('An error occurred:', error);
      
          });
      }, []); 

    const renderCards = () => {
        return cars.map((car) => (
            <Card carImage={car.image} vehicle_Name={car.vehicle_Name} city={car.city} state={car.state} price={car.price}/>
          ));
        }
    

return(
    <div>
         <div  className="backround-img">
            <div  className="container">
                <div  className="left-div" >
                    <div className="text-container">
                          <p>FIND YOUR <br/><span>DREAM CAR TODAY</span> </p>
                          <h1>Rent cars at the most competitive rates in the United States, renowned for its diverse range of locations across the nation and renowned for delivering exceptional value worldwide, we cordially invite you to explore our extensive and distinguished fleet of vehicles. Our commitment to excellence in service and affordability ensures that you receive unparalleled quality and value for your transportation needs.</h1>
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
                <SearchBar    />
            </div>
        </div>
         <div className="secound-Div-Conatiner">
           
            <div className="inner-Div">
                 <div className="inner-Div-top">
                    <p>HOW IT WORKS <br/><img  src='data:image/png;base64,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'/> <h1>User-friendly and interactive: Get your desired car today with just a few clicks.</h1>  </p>
                    
                 </div>
                <div className="box-Container">
                    <div className="box">
                        <img  src={locationIcon}/>
                        <h1>Choose Location   <br/> <p>Select from an extensive array of global destinations, suited for any occasion, and all within easy reach with the simple click of a button.</p></h1>
                    </div>
                </div>
                <div className="box-Container">
                    <div className="box">
                        <img  src={"https://thumbs.dreamstime.com/b/click-hand-icon-cursor-finger-sign-flat-vector-illustration-white-background-82899230.jpg"}/>
                        <h1>Choose vehicle  <br/> <p>Select from a diverse fleet of thousands of vehicles, ideal for any occasion or need, with new listings added every day. </p></h1>
                    </div>
                </div>
                <div className="box-Container">
                    <div className="box">
                        <img className="key-img" src={"   data:image/png;base64,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"}/>
                        <h1>Book vehcile   <br/> <p>After finding the perfect location and selecting the vehicle of your preference, proceed to secure your booking today and receive your vehicle promptly.  </p></h1>
                    </div>
                </div>
            </div>
         </div>
         <div  className="third-div">
                <div className="thirdDivContainer">
                    <div className="thirdDiv-Top">
                        <p>Explore Popular Cars <br className="br"/>
                        <h1>dummy text dummy text dummy text dummy text dummy text dummy text </h1></p>
                        
                    </div>
                    <div className="thirdDiv-Buttom">
                          {renderCards()}
                    </div>
                </div>
         </div>
         <div className="fourth-Div">
            <div className="fourth-Div-About">
            <div class="grid-container">
                <div class="column1">
                        <ul><p>About Company</p>
                        <hr class="orange-hr"></hr>
                            <li>Our Company</li>
                            <li>Partnerships</li>
                            <li>USA Locations</li>
                            <li>Guidelines</li>
                            <li>Investors</li>
                            <li>WorldWide Locations</li>
                            <li>Virtual Auto Show</li>
                           
                        </ul>
                </div>
                <div class="column2">
                        <ul><p>Quick Links</p>
                        <hr class="orange-hr"></hr>
                            <li>Events</li>
                            <li>My Account</li>
                            <li>Profile</li>
                            <li>Listings</li>
                            <li>Deals and Incentive</li>
                            <li>Financial Services</li>
                            <li>link1</li>
                        </ul>
                </div>
                </div>
            </div>
            <div className="fourth-Div-Contact">
            <div class="grid-container2"> 
                <p>Contact Info</p>
                <hr class="orange-hr"></hr>
                <div  className="number">
                   <img src="https://i.pinimg.com/1200x/4e/d7/d0/4ed7d0a3ecfc73035ee03ff12dc98a65.jpg"/> <h1>561-358-5753</h1>

                </div>
                <div  className="number">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIjV9wYmAPlVeZDH05gY_uGZ1MK70Z6cFHSA&usqp=CAU"/> <h1>support@example.com</h1>

                </div>
            </div>
            </div>
         </div>
    </div>
      

)
}
export default Home