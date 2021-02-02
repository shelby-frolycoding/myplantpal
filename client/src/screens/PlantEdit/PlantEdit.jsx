import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function EditPlant(props) {
  const [formData, setFormData] = useState({
    name: '',
    welcomeDate: '',
    lastWatered: '',
    waterFreq: ''
  })
  const { name, welcomeDate, lastWatered, waterFreq } = formData;
  const { plants, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const plantItem = plants.find((plantItem) => {
        return plantItem.id === Number(id)
      })
      setFormData({
        name: plantItem.name,
        welcomeDate: plantItem.welcome_date,
        lastWatered: plantItem.last_watered,
        waterFreq: plantItem.water_frquencey
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
      [name]: value
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
          name='weclome date'
          value={welcomeDate}
          onChange={handleChange}
        />
      </label>
      <label>Last Watered:
        <input
          type='text'
          name='last watered'
          value={lastWatered}
          onChange={handleChange}
        />
        <label>Water Frequency:
        <input
            type='text'
            name='water_frquencey'
            value={waterFreq}
            onChange={handleChange}
          />
        </label>
      </label>
      <button>Submit</button>
    </form>
  )
}