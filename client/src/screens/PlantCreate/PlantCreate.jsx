import React, { useState } from 'react'

export default function PlantCreate(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const { name, welcomeDate, lastWatered, waterFreq } = formData;
  const {handleCreate} = props;

  const handleChange = (e) => {
    const { name, welcomeDate, lastWatered, waterFreq, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
      [welcomeDate]: value,
      [lastWatered]: value,
      [waterFreq]: value,
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData)
    }}>
      <h3>Add A New Friend</h3>
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
      </label>
      <label>Water Frequency:
        <input
            type='text'
            name='water_frquencey'
            value={waterFreq}
            onChange={handleChange}
          />
        </label>
      
      <button>Submit</button>
    </form>
  )
}