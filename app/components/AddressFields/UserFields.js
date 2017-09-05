import React from 'react';

class UserFields extends React.Component{

constructor(){
    super()

    console.log("USERTESTING")

    this.state = {
        email: "",
        confirmemail: "",
        password: "",
        confirmpassword: "",
        firstname: "",
        lastname: ""
    }

    this.handleChange = this.handleChange.bind(this);
}

handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});

}

render(){
    return(
        <div>
            <label>
                Email:
                <input type="email" name="email" value={this.state.email} onBlur={this.handleChange}/>
            </label>
            <label>
                Confirm Email:
                <input type="confirmemail" name="confirmemail" value={this.state.confirmemail} onBlur={this.handleChange}/>
            </label>
            <label>
                Password:
                <input type="password" name="password" value={this.state.password} onBlur={this.handleChange}/>
            </label>
            <label>
                Confirm Password:
                <input type="confirmpassword" name="confirmpassword" value={this.state.confirmpassword} onBlur={this.handleChange}/>
            </label>
        </div>
    );
}

}

export default UserFields;