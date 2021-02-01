import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Landing from "./screens/Landing/Landing";
import Login from "./screens/SignIn/Login";
import Register from "./screens/Register/Register";
import { loginUser, registerUser, verifyUser, removeToken } from "./services/auth";
import "./App.css"

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }

  return (
    <Landing currentUser={currentUser} handleLogout={handleLogout}>
      <Switch>
        <Route path='/login'>
          <Login
            handleLogin={handleLogin}
          />
        </Route> 
        <Route path='/register'>
          <Register
            handleRegister={handleRegister}
          />
        </Route>
     
      </Switch>
    </Landing>
  );
}

export default App;
