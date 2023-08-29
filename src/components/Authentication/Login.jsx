import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { authenticate } from "../../functions/authenticate";
import { auth } from "../../functions/api/auth";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const accessToken  = await auth(password,email)
      console.log(accessToken);
      if(accessToken){
        localStorage.setItem("token",accessToken);
        navigate('/interview')  
      }
      
    };

  return (
    <StyledLogin>
      <div id="form">
        <h1>Login</h1>
        <p>Enter your details below and login into your account</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <br/>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter Email Address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br/>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to='/signup'>Sign Up</Link> now</p>
      </div>
      <div id="cover"></div>
    </StyledLogin>
  );
};

export default Login;

const StyledLogin = styled.div`
  display: flex;
  width: 100%;
  h1, p, form{
    padding: 1rem 3rem;
  }


  form{
    display: flex;
    flex-direction:column;
    gap: 3rem;
  }

  #form {
    margin-top: 4rem;

    width: 40%;
    height: 100vh;
  }

  #cover {
    width: 60%;
    height: 100vh;
    background-color: green;
  }

  input{
    width: 97.5%;
    height: 3rem;
    margin-top: 0.7rem;
    padding-left: 0.5rem;
  }

  button{
    background-color: green;
    color: white;
    height: 4rem;
    border-radius: 0.4rem;
    font-size: 1.5rem;
  }
`;
