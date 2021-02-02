
import api from './api-config';

export const getAllPlantTypes = async () => {
  const resp = await api.get('/plant_types');
  return resp.data;
}

export const addPlantType = async (data) => {
  const resp = await api.put('/plant_types', data);
  return resp.data;
}