import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllPlantTypes } from '../../services/plant-types'
import "./PlantEdit.css"

export default function EditPlant(props) {
  const [plantTypes, setPlantTypes] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    welcome_date: '',
    last_watered: '',
    water_frquencey: ''
  })
  const { name, welcome_date, last_watered, water_frquencey } = formData;
  const { plants, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const getTypes = async () => {
      let types = await getAllPlantTypes()
      setPlantTypes(types)
    }
    getTypes()

    const prefillFormData = () => {
      const plantItem = plants.find((plantItem) => {
        return plantItem.id === Number(id)
      })
      setFormData({
        ...plantItem
        // name: plantItem.name,
        // welcomeDate: plantItem.welcome_date,
        // lastWatered: plantItem.last_watered,
        // waterFreq: plantItem.water_frquencey
      })
    }
    if (plants.length) {
      prefillFormData()
    }
  }, [plants])

  const handleSelectChange = (e) => {
    console.log(e.target.value)
    setFormData(prevState => ({
      ...prevState, 
      plant_type_id: e.target.value
    }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,

    }))
  }

  return (
    <div className = "p-cont">
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
    }}>
      <h3 className = "title">Edit Your Plant</h3>
      <label className = "p-label">Plant Name:
        <input 
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label> <br/>
      <label className = "p-label">Welcome Date:
        <input
          type='text'
          name='welcome_date'
          value={welcome_date}
          onChange={handleChange}
        />
      </label><br/>
      <label className = "p-label">Last Watered:
        <input
          type='text'
          name='last_watered'
          value={last_watered}
          onChange={handleChange}
          />
          </label><br/>
        <label className = "p-label">Water Frequency (In Days):
        <input
            type='text'
            name='water_frquencey'
            value={water_frquencey}
            onChange={handleChange}
          />
        
      </label><br/>
      {/* {plantItem?.plantType.map(plantType => (
        <p key={plantType.id}>{plantType.name}</p>
      ))} */}


      <select className= "p-select" defaultValue='default' onChange={handleSelectChange}>
        <option className= "select" disabled value='default'>-- Select a type --</option>
        {plantTypes.map(plantType => (
            <option value={plantType.id} key={plantType.id}>{plantType.name}</option>
          ))}
      </select>
      <button className= "log-butt">add</button>
      <br/>
      <button className= "log-butt">Submit</button>
      </form>
      </div>
  )
}