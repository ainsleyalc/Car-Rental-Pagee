import React from "react"

const Card = (props) =>{
return( 
                            <div  className="cardBox">
                                <div className="card ">
                                    
                                        <div className="card-Top">
                                            <button class="circle-button">
                                                <h3 class="heart-icon">	&#9829;</h3>
                                            </button>
                                            <img  className="car-img" src={props.carImage}/>
                                            <img   className="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM3ar7kd8g5YTl301DuDyisL71AJTMBocbyg&usqp=CAU" />
                                        </div>
                                        <div className="card-Buttom">
                                            <div className="titleBox">
                                                <p>{props.vehicle_Name}</p>
                                                <div className="ratingBox">
                                                    <img     src="https://www.pngmart.com/files/10/5-Stars-PNG-Image.png"/>
                                                    <h1>(5.0)</h1>
                                                </div>
                                                <hr></hr>
                                            
                                                <div className="first-Row">

                                                </div>
                                                <div className="location-Box">
                                                    <p>{props.city}, {props.state}</p>
                                                    <h2>
                                                    ${props.price}<h3>/ DAY</h3>
                                                    </h2>
                                                </div>
                                                <div className="rentButton">
                                                        <button>
                                                            RENT NOW
                                                        </button>
                                                </div>
                                            </div>
                                                                                        
                                        </div>
                                    

                                </div>
                            </div>
)
       
}
export default Card
