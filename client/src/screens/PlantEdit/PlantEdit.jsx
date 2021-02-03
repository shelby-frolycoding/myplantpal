import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function EditPlant(props) {
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
      <button>Submit</button>
    </form>
  )
}