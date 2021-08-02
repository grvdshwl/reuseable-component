import React from "react";

import "./form-input.styles.css";

const FormInput = ({handleChange,...otherProps})=>(

    <div>
        <input className="form-input" 
        onChange={(event)=>handleChange(event)}
        {...otherProps} required/>
    </div>

)


export default FormInput;