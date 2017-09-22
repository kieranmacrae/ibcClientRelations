import React from 'react';
import $ from 'jquery';
import {Form, Col, HelpBlock} from 'react-bootstrap';
import GetData from './SignupInput.js'

var storeAnswers = [];

class SignupForm extends React.Component {

  constructor(props) {
      super(props);
      console.log("This is this rendering", this.props.list)

      this.state = ({
          safeSubmit: false,
          compareConfirm: "",
          errorMessage: "",
          storeAnswers: []
      });

      this.storeUserData = this.storeUserData.bind(this);
      this.renderEnableBtn = this.renderEnableBtn.bind(this);
      this.renderDisabledbtn = this.renderDisabledbtn.bind(this);
      this.checkReadyForSubmit = this.checkReadyForSubmit.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
      var temp = [];
      for(var i = 0; i < this.props.fields.length; i++){
          temp[i]= null;
      }
      this.setState({
          storeAnswers: temp
      })
      console.log("checkingarray",temp)
  }

  componentWillReceiveProps(){
      var temp = [];
      for(var i = 0; i < this.props.fields.length; i++){
          temp[i]= null;
      }
      this.setState({
          storeAnswers: temp
      })
      console.log("checkingarray",temp)
  }

    storeUserData(data, index){
        var temp = this.state.storeAnswers;
        temp[index] = data;
        this.setState({
            storeAnswers: temp
        })
        console.log("Is it ready?", temp)
        this.checkReadyForSubmit() && this.setState({safeSubmit: true})

    }

    checkReadyForSubmit(){
        for(var i=0; i<this.state.storeAnswers.length; i++){
            if(this.state.storeAnswers[i] === null && this.props.fields[i].mandatory === '1'){
                return false;
            }
        }
        return true;
    }

     renderEnableBtn(){
         return(
             <button
                 id="signup-submitbtn"
                 className = "btn"
                 onClick={this.handleSubmit}>
                 Submit
             </button>
         )
     }

     renderDisabledbtn(){
         return(
             <button id="signup-submitbtn" className = "btn" disabled>Submit</button>
         )
     }

     handleSubmit(event){
         this.props.sendData(this.state.storeAnswers);

     }


  render() {
    return (
        <div id="signup-container" className="w3-row">
                <Form method='POST' className="w3-container w3-card-4 w3-light-grey" horizontal={true}>
                    <div id="signup-headings">Membership Form</div>
                {this.props.fields.map((item, i) =>
                            <GetData key = {i}
                                    type = {this.props.fields[i].inputtype}
                                    displayName = {this.props.fields[i].displayname}
                                    mandatory = {this.props.fields[i].mandatory}
                                    userAnswer = {this.storeUserData}
                                    index = {i}/>
                            )}
                    {this.state.safeSubmit ? this.renderEnableBtn() : this.renderDisabledbtn()}
                </Form>
        </div>
    );
  }
}
export default SignupForm;