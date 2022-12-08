/* eslint-disable class-methods-use-this */

import axios from 'axios';
import config from '../config';

const { apiBaseUrl } = config;

export default class PlaceApiService {
  async fetchPlaces() {
    const url = `${apiBaseUrl}/places`;
    const { data } = await axios.get(url);
    return data;
  }
}

export const placeApiService = new PlaceApiService();
