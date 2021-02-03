import React, { useState, useEffect } from 'react'
import { getAllPlantTypes } from '../../services/plant-types'

export default function PlantCreate(props) {
  const [plantTypes, setPlantTypes] = useState([])
  const [formData, setFormData] = useState({
    
    name: ''
  })
  const { name, welcome_date, last_watered, water_frquencey } = formData;
  const { handleCreate } = props;
  
  useEffect(() => {
    const getTypes = async () => {
      let types = await getAllPlantTypes()
      setPlantTypes(types)
    }
    getTypes()
   },[])
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
      handleCreate(formData)
    }}>
      <h3>Add A New Friend</h3>
      <label className = "p-label">Name:
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label><br/>
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
      <label className = "p-label">Water Frequency:
        <input
            type='text'
            name='water_frquencey'
            value={water_frquencey}
            onChange={handleChange}
          />
        </label><br/>
        <select className= "p-select" defaultValue='default' onChange={handleSelectChange}>
        <option className= "select" disabled value='default'>-- Select a type --</option>
        {plantTypes.map(plantType => (
            <option value={plantType.id} key={plantType.id}>{plantType.name}</option>
          ))}
      </select>
      <button className = "log-butt">add</button>
      <br/>
      <button className = "log-butt">Submit</button>
      </form>
      </div>
  )
}