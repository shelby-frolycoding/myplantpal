import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Landing from "./screens/Landing/Landing";
import Layout from "./components/Shared/Layout/Layout"
import Login from "./screens/SignIn/Login";
import Register from "./screens/Register/Register";
import Plants from "./screens/List/Plants"
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
    <Layout user={currentUser} handleLogout={handleLogout}>
      <Switch>
        <Route path='/plants'>
          <Plants user={currentUser} />
        </Route>
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
     <Route>
        <Landing path='/' />
        </Route>
         
      </Switch>
    </Layout>
  );
}

export default App;
