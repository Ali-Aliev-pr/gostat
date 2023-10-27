import api from '@/app/utils/axiosInstance'

import { AxiosResponse } from 'axios';
import { ISingUpRequest, IAuthResponse, ISingInRequest } from './index';

export const singUp = async (body: ISingUpRequest): Promise<AxiosResponse<IAuthResponse>> => {    
  try {
    const response = await api.post('/api/auth/registration', body);
    return response
  } catch (error) {
    console.log('Error fetching data:', error);
    return Promise.reject(error);
  }
}

export const singIn = async (body: ISingInRequest): Promise<AxiosResponse<IAuthResponse>> => {
  try {
    const response = await api.post('/api/auth/login', body);
    return response
  } catch (error) {
    console.log('Error fetching data:', error);
    return Promise.reject(error);
  }
}