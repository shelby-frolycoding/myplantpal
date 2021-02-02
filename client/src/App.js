import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Landing from "./screens/Landing/Landing";
import Layout from "./components/Shared/Layout/Layout"
import Login from "./screens/SignIn/Login";
import Register from "./screens/Register/Register";
import Plants from "./screens/List/Plants"
import Detail from "./screens/Detail/Detail"
import PlantEdit from "./screens/PlantEdit/PlantEdit"
import PlantCreate from "./screens/PlantCreate/PlantCreate"
// import { getAllPlants } from "./services/plants"
import { deletePlant, getAllPlants, postPlant, putPlant } from './services/plants';
import { loginUser, registerUser, verifyUser, removeToken } from "./services/auth";
import "./App.css"


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [plants, setPlants] = useState([])
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
  const handleCreate = async (plantData) => {
    const newPlant = await postPlant(plantData);
    setPlants(prevState => [...prevState, newPlant])
    history.push('/plants')
  }

  const handleDelete = async (id) => {
    await deletePlant(id);
    setPlants(prevState => prevState.filter(plantItem => {
      return plantItem.id !== id
    }))
  }

  const handleUpdate = async (id, plantData) => {
    const updatedPlant = await putPlant(id, plantData);
    setPlants(prevState => prevState.map(plantItem => {
      return plantItem.id === Number(id) ? updatedPlant : plantItem
    }))
    history.push('/plants')
  }

  useEffect(() => {
    const getPlants = async () => {
      const plantdata = await getAllPlants()
      setPlants(plantdata)
    }
    getPlants()

  }, []);

  return (
    <Layout user={currentUser} handleLogout={handleLogout}>
      <Switch>

        <Route exact path='/plants'>
          <Plants user={currentUser} plants={plants} handleDelete={handleDelete} />
        </Route>
        <Route path='/login'>
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path='/register'>
          <Register handleRegister={handleRegister} />
        </Route>
        <Route exact path='/'>
          <Landing  />
        </Route>
        <Route path='/plants/:id'>
          <Detail plants={plants} />
        </Route>
        <Route exact path='/plants/:id/edit'>
          <PlantEdit plants={plants} handleUpdate={handleUpdate} />
        </Route>
        <Route path='/plants/new'>
          <PlantCreate handleCreate={handleCreate} />
        </Route>

      </Switch>
    </Layout>
  );
}

export default App;
