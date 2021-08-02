import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

import "./sign-in.styles.css";

class SignIn extends React.Component {

    constructor(){
        super()

        this.state = {
            email :"",
            password:""

        }
    }

    handleChange = (event)=>{
        const {name,value} = event.target
        this.setState(
            {
                [name]: value
            }
        )
    }    

    handleSubmit = async (event) =>{
        event.preventDefault();

        const {email,password} =this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email:"",
                password:""
            })

        }catch(error){
            console.log("error in sign in", error.message)
            
            this.setState({
                email:"",
                password:""
            })
            alert(error.message)
        }
        
    }



    render(){
    
    return(

        <div className="sign-in">

            <h2> I already have a account</h2>
            <h4> Sign in with your email and password</h4>
            <form className= "sign-in-form" onSubmit={this.handleSubmit}>

                <FormInput handleChange={this.handleChange}  placeholder="Email" name="email" type="email" value={this.state.email}/>
                 <FormInput handleChange={this.handleChange} placeholder="Password" type= "password" name="password" value={this.state.password} />
                 <div className="sign-in-button">
                    <CustomButton  type="submit"  > Sign In </CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn > Sign In With Google </CustomButton>
                 </div>
            </form>     
        </div>

    )
        }
}


export default SignIn;