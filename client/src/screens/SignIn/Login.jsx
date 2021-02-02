import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"


export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="log-cont">
    <form onSubmit={(e) => {
        e.preventDefault();   
    handleLogin(formData); 
      }}>
        <div className="log-deets">
          <h3>Login</h3>
        <label>Username:
        <input
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>Password:
        <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
          </label>
          <br />
          <button className= "log-butt">Submit</button>
        <div className= "reg">
        Dont have an account? <Link className="reg-link" to='/register'> register here.</Link>
           
            </div>
          </div>
      </form>
     
    </div>


  )
}