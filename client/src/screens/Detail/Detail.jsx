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
      <h3>{plantItem?.welcome_date}</h3>
      <h3>{plantItem?.water_frquencey}</h3>
      <h3>{plantItem?.plant_type.name}</h3>
     
    </div>
  )
}