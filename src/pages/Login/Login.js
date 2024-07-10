import React, { useState } from 'react';
import styled from 'styled-components';
import { login, signup } from '../../firebase';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (signState === "Sign In") {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
      navigate('/');
    } catch (error) {
      console.error("Authentication failed", error);
    }
    setLoading(false);
  };

  return (
    loading?<LoadingSpinner>
      <img src={'/assets/netflix_spinner.gif'} alt=""/>
    </LoadingSpinner>:
    <Container>
      <img src="/assets/logo.png" alt=""/>
      <LoginForm>
        <h1>{signState}</h1>
        <form onSubmit={user_auth}>
          {signState === "Sign Up" && <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your name' />}
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
          <button type='submit'>{signState}</button>
          <FormHelp>
            <Remember>
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </Remember>
            <p>Need Help?</p>
          </FormHelp>
        </form>
        <FormSwitch>
          {signState === "Sign In"
            ? <p>New to Netflix? <span onClick={() => { setSignState("Sign Up") }}>Sign Up Now</span></p>
            : <p>Already have an account? <span onClick={() => { setSignState("Sign In") }}>Sign In Now</span></p>}
        </FormSwitch>
      </LoginForm>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(#0000007e, #0000007e), url('/assets/background_banner.jpg');
  padding: 20px 8%;

  img {
    width: 150px;
  }

  @media (max-width: 500px) {
    padding: 15px 5%;
  }
`;

const LoginForm = styled.div`
  width: 100%;
  max-width: 450px;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  padding: 60px;
  margin: auto;

  h1 {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 28px;
  }

  input {
    width: 100%;
    height: 50px;
    background: #333;
    color: white;
    margin: 12px 0;
    border: 0;
    outline: 0;
    border-radius: 4px;
    padding: 16px 20px;
    font-size: 16px;
    font-weight: 500;
    &::placeholder {
      font-size: 16px;
      font-weight: 500;
    }

    @media (max-width: 500px) {
    padding: 20px;
    margin-top: 30px;
  }
  }

  button {
    width: 100%;
    border: 0;
    outline: 0;
    padding: 16px;
    background: #e50914;
    color: white;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
    margin-top: 20px;
    cursor: pointer;
  }
`;

const FormHelp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #b3b3b3;
  font-size: 13px;
`;

const Remember = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  input {
    width: 18px;
    height: 18px;
  }
`;

const FormSwitch = styled.div`
  margin-top: 40px;
  color: #737373;

  span {
    margin-left: 6px;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
  }
`;

const LoadingSpinner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60px;
  }
`
