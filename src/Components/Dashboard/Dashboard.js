import React, { Component } from "react";
import House from "../House/House.js";
import axios from "axios";
import "./Dashboard.css";
import {HashRouter, Link} from "react-router-dom";

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            houseList: []
        }
        this.getAllHouses = this.getAllHouses.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
    }

    componentDidMount(){
        this.getAllHouses();
    }

    getAllHouses(){
       axios.get("/api/houses")
       .then(res => {
         this.setState({houseList: res.data});
       })
       .catch(error => {console.log("Error on Dashboard Get All Items: ", error)});
    }
    deleteHouse(house_id){
        console.log("The house id is ", house_id);
        axios.delete(`/api/houses/${house_id}`)
        .then(res => {
            console.log("Removed House");
          })
          .catch(error => {console.log("Error on Delete House: ", error)});
    }


    render(){
        return(
            <div className="mainDashboard">
                <section className="dashHeaderCont">
                    <h2>Dashboard</h2>
                    <Link style={{textDecoration:'none'}} to="/wizard" className="dashHeaderButton">
                        Add New Property
                    </Link>
                </section>
                <section className="dashContentMainCont">
                    <h3 className="dashContentTitle">Home Listings</h3>
                    
                    {this.state.houseList.map(house => {
                        return(
                            <House 
                            key={house.house_id} 
                            house={house}
                            propertyName={house.property_name}
                            address={house.address}
                            city={house.city}
                            state={house.state}
                            zipCode={house.zip_code}
                            getAllHouses = {this.getAllHouses}
                            deleteHouse = {this.deleteHouse}
                        />
                        )})
                    }


                </section>
                
            </div>
        )
    }
}

export default Dashboard;