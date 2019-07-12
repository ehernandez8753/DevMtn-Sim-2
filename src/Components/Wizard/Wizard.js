import React, { Component } from "react";
import "./Wizard.css";
import axios from "axios";
import {HashRouter, Link} from "react-router-dom";

class Wizard extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zipcode: "",
        }
    }
    addNewHouse(property_name, address, city, state, zip_code){
        axios.post("/api/houses", {property_name, address, city, state, zip_code})
        .then(res => {
            console.log("Added New House");
          })
          .catch(error => {console.log("Error on Add House: ", error)});
    }
    getAllHouses(){
        axios.get("/api/houses")
        .then(res => {
          this.setState({houseList: res.data});
        })
        .catch(error => {console.log("Error on Dashboard Get All Items: ", error)});
     }
    onChangeName(newName){
        this.setState({
            name: newName
        })
    };
    onChangeAddress(newAddress){
        this.setState({
            address: newAddress
        })
    };
    onChangeCity(newCity){
        this.setState({
            city: newCity
        })
    };
    onChangeState(newState){
        this.setState({
            state: newState
        })
    };
    onChangeZipCode(newZipCode){
        this.setState({
            zipcode: newZipCode
        })
    };

    render(){
        return(
            <div className="mainWizard">
                <section className="mainWizardHeader">
                    <h2>Add New Listing</h2>
                    <Link style={{textDecoration:'none'}} to="/" className="wizardHeaderButton">
                        Cancel
                    </Link>
                </section>
                <section className="wizardContentMainCont">
                    <div className="wizardEntryBox">
                        <h3 className="wizardEntryTitle">Property Name</h3>
                        <input value={this.state.name} onChange={(event) => {this.onChangeName(event.target.value)}}></input>
                    </div>
                    <div className="wizardEntryBox">
                        <h3 className="wizardEntryTitle">Address</h3>
                        <input value={this.state.address} onChange={(event) => {this.onChangeAddress(event.target.value)}} style={{width:"30vw"}}></input>
                    </div>
                    <section className="wizardBotEntryCont">
                        <div className="wizardEntryBox">
                            <h3 className="wizardEntryTitle">City</h3>
                            <input value={this.state.city} onChange={(event) => {this.onChangeCity(event.target.value)}}></input>
                        </div>
                        <div className="wizardEntryBox">
                            <h3 className="wizardEntryTitle">State</h3>
                            <input value={this.state.state} onChange={(event) => {this.onChangeState(event.target.value)}} maxLength="2" style={{width:"4vw"}}></input>
                        </div>
                        <div className="wizardEntryBox">
                            <h3 className="wizardEntryTitle">Zip</h3>
                            <input value={this.state.zipcode} onChange={(event) => {this.onChangeZipCode(event.target.value)}} type="number" style={{width:"8vw"}}></input>
                        </div>
                    </section>
                </section>
                <section className="wizardBotCont">
                    <Link className="wizardCompleteButton" to="/" style={{textDecoration:'none'}} onClick={() => {this.addNewHouse(this.state.name, this.state.address, this.state.city, this.state.state, this.state.zipcode); this.getAllHouses()}}>Complete</Link>
                </section>
                
            </div>
        )
    }
}

export default Wizard;