import api from '@/services/api'
import axios from 'axios';

export default {
  index (port) {
	  return axios.get(`http://localhost:${port}`)
	}
}