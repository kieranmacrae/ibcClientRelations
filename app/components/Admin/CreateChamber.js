import React from 'react';
import Address from '../ReusableFields/EnterAddress';
import UserFields from '../ReusableFields/UserFields';
import $ from 'jquery';

var update = 0;
var display = "Yes";
var chamberMenu = [{
    name: ""
}]

class NewChamber extends React.Component{

constructor(){
    super()

    this.state = {
        name: "",
        email: "",
        confirmemail: "",
        password: "",
        confirmpassword: "",
        firstname: "",
        lastname: "",
        abn: "",
        line1: "",
        line2: "",
        city: "",
        postcode: "",
        state: "",
        country: "",
        parentID: "",
        president: "",
        hasParent: 0,
        parentButton: "Yes",
    }
    this.myCallback = this.myCallback.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddParent = this.handleAddParent.bind(this);
}

/*function to send to child to get the chamber id of page to load*/
myCallback (name, value) {
     this.setState({[name]: value});
 }
 componentWillMount(){
     this.getChamberList();
 }

 getChamberList(){
     $.ajax({url: '/php/get_allchamber.php', async: false, type: 'POST',
         dataType: 'json',
     success: response => {
         chamberMenu = response;
         console.log(chamberMenu)
     },
     error: response => {
         console.log(response)
     }
     });
 }


handleSubmit(event){
    $.ajax({url: '/php/insert_new_chamber.php', type: 'POST',
        dataType: 'json',
        data: {
            'name': this.state.name,
            'email': this.state.email,
            'password': this.state.password,
            'firstname': this.state.firstname,
            'lastname': this.state.lastname,
            'abn': this.state.abn,
            'line1': this.state.line1,
            'line2': this.state.line2,
            'city': this.state.city,
            'postcode': this.state.postcode,
            'state': this.state.state,
            'country': this.state.country,
            'parentID': this.state.parentID,
        },
    success: response => {
        console.log(response)
    },
    error: response => {
        console.log(response)
    }

});
}

renderMenu(){
    return(
    <label>
        Please Select the Chamber that the new Chamber belongs to:
      <select value={this.state.value} onChange={this.handleChange}>
          {Object.keys(chamberMenu).map((item,index) =>
              <option key = {index} value={item}>{chamberMenu[item]}</option>)}
      </select>
    </label>
    )
}

handleAddParent(){
    update = (update + 1)%2;
    update ? display="Cancel" : display="Yes"

    console.log("testing", display)
    this.setState({
        hasParent: update,
        parentButton: "test"
    });
}


render(){
    return(


        <div className= "signup-fields">
            <h1>ENTER DETAILS FOR NEW CHAMBER</h1>
            <label>
                Name of new Chamber:
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
            </label>
            <label>
                Is this a branch of another Chamber?
                <button id="chamberadmin-btn" className = "btn" onClick={() => this.handleAddParent()}>{display}</button>
            </label>
            {update ? this.renderMenu() : null}
            <hr className = "admin-divider" />

            <h4>The following fields correspond to the Executive Account of the Chamber</h4>
            <UserFields callbackFromParent={this.myCallback} />
            <hr className = "admin-divider" />

            <h4>Chamber Address</h4>
            <Address />
            <hr className = "admin-divider" />

            <h4>Additional Chamber Details</h4>
            <label>
                ABN:
                <input type="number" name="abn" value={this.state.abn} onChange={this.handleChange}/>
            </label>

            <label>
                Presidents Full Name:
                <input type="text" name="president" value={this.state.president} onChange={this.handleChange}/>
            </label>
            <button id= "submitform-button" className = "btn" onClick={() => this.handleSubmit()}>Submit</button>
        </div>


    );
}

}

export default NewChamber;