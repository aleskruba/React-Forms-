import * as React from 'react';
import './style.css';
import FormInput from "./components/FormInput"

export default function App() {
    const [values,setValues] = React.useState({
      username:'',
      email:'',
      birthday:'',
      password:'',
      confirmPassword:'',
      
    })
   
const inputs = [
  {
    id:1,
    name:"username",
    type:'text',
    placeholder:'Username',
    errorMessage:'Username should be 3-16 characters',
    label:'Username',
    pattern:'^[A-Ya-y0-9]{3,16}$',
    required:true
  },
  {
    id:2,
    name:"email",
    type:'email',
    placeholder:'Email',
    errorMessage:'It should be a valid email address',
    label:'Email',
    required:true
  },
  {
    id:3,
    name:"birthday",
    type:'date',
    placeholder:'Birthday',
    errorMessage:'',
    label:'Birthday'
  },
  {
    id:4,
    name:"password",
    type:'password',
    placeholder:'password',
    errorMessage:'Pasword should be 8-20 characters + 1 letter + 1 number + 1 sps.char',
    label:'Password',
    pattern:'^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\])',
    required:true
  },
  {
    id:5,
    name:"confirmPassword",
    type:'password',
    placeholder:'ConfirmPassword',
    errorMessage:'Password dont match',
    label:'ConfirmPassword', 
    pattern: values.password,
    required:true
  }
]

    console.log('re-rendered')
    
    const handleSubmit = (e) => {
      e.preventDefault();
     // const data = new FormData(e.target)
     // console.log(Object.fromEntries(data.entries()))

    }

    const onChange = (e) => {
      setValues({...values,[e.target.name]:e.target.value })
    }

    console.log(values)
    return(
    <div className='app'>
     
      <form onSubmit={handleSubmit}>
      <h1>Register</h1>
            {inputs.map((input)=>  (
          <FormInput key={input.id} 
                    {...input} 
                    value={values[input.name]} 
                    onChange={onChange}/>

        ))}
        
   
      <button>Submit</button>
      </form>
    </div>
  );
}
