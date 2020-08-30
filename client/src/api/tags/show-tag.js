import axios from 'axios';
import { headers } from 'middleware/headers';

export async function fetchSingleTag(key, { id }) {
  return await axios.get(`/tags/${id}`, headers());
}
