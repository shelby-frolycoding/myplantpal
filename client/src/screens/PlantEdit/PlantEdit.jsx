import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllPlantTypes } from '../../services/plant-types'

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
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
    }}>
      <h3>Edit Your Plant</h3>
      <label>Name:
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>Welcome Date:
        <input
          type='text'
          name='welcome_date'
          value={welcome_date}
          onChange={handleChange}
        />
      </label>
      <label>Last Watered:
        <input
          type='text'
          name='last_watered'
          value={last_watered}
          onChange={handleChange}
        />
        <label>Water Frequency:
        <input
            type='text'
            name='water_frquencey'
            value={water_frquencey}
            onChange={handleChange}
          />
        </label>
      </label>
      {/* {plantItem?.plantType.map(plantType => (
        <p key={plantType.id}>{plantType.name}</p>
      ))} */}


      <select defaultValue='default' onChange={handleSelectChange}>
        <option disabled value='default'>-- Select a type --</option>
        {plantTypes.map(plantType => (
            <option value={plantType.id} key={plantType.id}>{plantType.name}</option>
          ))}
      </select>
      <button>add</button>

      <button>Submit</button>
    </form>
  )
}