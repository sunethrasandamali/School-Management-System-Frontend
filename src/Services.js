import axios from 'axios';

class Service {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL: baseURL,
    });
  }

  async getAll() {
    try {
        axios.get(`${endpoints.API_URL}/Student`)
        .then(response => {
            console.log(response);
            // Handle successful response
            setData(response.data);
        })
        .catch(error => {
            // Handle error
            console.error(error);
        });
    } catch (error) {
      console.error('Error retrieving data:', error);
      throw error;
    }
  }

  async getById(id) {
    try {
      const response = await this.api.get(`/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error retrieving data for ID ${id}:`, error);
      throw error;
    }
  }

  async create(data) {
    try {
      const response = await this.api.post('/', data);
      return response.data;
    } catch (error) {
      console.error('Error creating data:', error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.api.put(`/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error updating data for ID ${id}:`, error);
      throw error;
    }
  }

  async delete(id) {
    try {
      await this.api.delete(`/${id}`);
      console.log(`Data with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting data with ID ${id}:`, error);
      throw error;
    }
  }
}

export default Service;
