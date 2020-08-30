import axios from 'axios';
import { headers } from 'middleware/headers';

export async function fetchTags() {
  return await axios.get('/tags', headers());
}
