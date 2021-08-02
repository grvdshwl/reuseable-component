import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";


import "./sign-up.styles.css";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";


class SignUp extends React.Component{

    constructor(){
        super();
        this.state={
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    }


    handleChange = (event)=>{
        const {name,value} = event.target;

        this.setState({
            [name]:value
        })
    }

    handleSubmit = async (event)=>{

        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        
        if(password !== confirmPassword){
            alert("Password entered doesn't match.")
            return;
        }
        
        

        try{

            const {user } = await auth.createUserWithEmailAndPassword(email,password);
        
            createUserProfileDocument(user,{displayName});

            this.setState({
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
            })
        }catch(error){
            console.log(error.message)
        }
        


    }

    render(){
        return(
            <div className="sign-up">
            <h2> I don't have a account</h2>
            <h4> Sign up  with your email and password</h4>
            <form onSubmit={this.handleSubmit}>
            <FormInput handleChange={this.handleChange}  placeholder="Name" name="displayName" type="text" value={this.state.displayName}/>
            <FormInput handleChange={this.handleChange}  placeholder="Email" name="email" type="email" value={this.state.email}/>
            <FormInput handleChange={this.handleChange}  placeholder="Password" name="password" type="password" value={this.state.password}/>
            <FormInput handleChange={this.handleChange}  placeholder="Confirm Password" name="confirmPassword" type="password" value={this.state.confirmPassword}/>   
            <CustomButton type="submit">Sign Up</CustomButton>
            </form>
            

            </div>
        )
    }

}


export default SignUp;