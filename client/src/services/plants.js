import api from './api-config';

export const getAllPlants = async () => {
  const resp = await api.get('/plants');
  return resp.data;
}

export const postPlant = async (PlantData) => {
  const resp = await api.post('/plants', { plant: PlantData });
  return resp.data;
}

export const deletePlant = async (id) => {
  const resp = await api.delete(`/plants/${id}`);
  return resp;
}

export const putPlant = async (id, PlantData) => {
  const resp = await api.put(`/plants/${id}`, { plant: PlantData });
  return resp.data;
}

export const getOnePlant = async (id) => {
  const resp = await api.get(`/plants/${id}`);
  return resp.data;
}