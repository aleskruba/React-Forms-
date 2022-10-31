import * as React from 'react';
import "./formInput.css"

const FormInput = (props) => {


  const [focused,setFocused] = React.useState(false)
  const {label,onChange,errorMessage,id, ...inputProps} = props;

const handlefocus = () =>{
  setFocused(true)
}

  return (
    <div className="formInput">
         <label>{label}</label>
      <input {...inputProps} 
             onChange={onChange} 
             onBlur={handlefocus} 
             onFocus={() =>
              inputProps.name === "confirmPassword" && setFocused(true)
            }
            focused={focused.toString()} />
            
            <span>{errorMessage}</span>
      </div>

  )
}

export default FormInput
