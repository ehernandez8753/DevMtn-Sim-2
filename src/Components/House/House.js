import React, { Component } from "react";
import "./House.css";

class House extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="mainHouseCont">
                <section className="mainHouseContLeft">
                    <p>Property Name: {this.props.propertyName}</p>
                    <p>Address: {this.props.address}</p>
                    <p>City: {this.props.city}</p>
                    <p>State: {this.props.state}</p>
                    <p>Zip: {this.props.zipCode}</p>
                </section>
                <button className="mainHouseDeleteButton" onClick={() => {this.props.deleteHouse(this.props.house.house_id); this.props.getAllHouses()}}>X</button>

            </div>
        )
    }
}

export default House;