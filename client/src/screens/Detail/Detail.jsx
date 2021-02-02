import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addPlantType } from '../../services/plant-types';
import { getOnePlant } from '../../services/plants';

export default function Detail(props) {
  const [plantItem, setPlantItem] = useState(null);
  const [plantTypeId, setPlantTypeId] = useState('')
  const { id } = useParams();

  useEffect(() => {
    const fetchPlantItem = async () => {
      const plantData = await getOnePlant(id);
      setPlantItem(plantData);
    }
    fetchPlantItem();
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const plantItem = await addPlantType({ plant_type_id: plantTypeId, plant_id: id });
    setPlantItem(plantItem);
  }


  const handleChange = (e) => {
    const { value } = e.target;
    setPlantTypeId(value);
  }

  return (
    <div>
      <h3>{plantItem?.name}</h3>
      <h3>{plantItem?.last_watered}</h3>
      <h3>{plantItem?.lastWatered}</h3>
      {/* {plantItem?.plantType.map(plantType => (
        <p key={plantType.id}>{plantType.name}</p>
      ))} */}

      <form onSubmit={handleSubmit}>
        <select defaultValue='default' onChange={handleChange}>
          <option disabled value='default'>-- Select a type --</option>
          {/* {props.plantType.map(plantType => (
            <option value={plantType.id} key={plantType.id}>{plantType.name}</option>
          ))} */}
        </select>
        <button>add</button>
      </form>
    </div>
  )
}