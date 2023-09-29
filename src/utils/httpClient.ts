import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as camelize from 'camelize';
import snakeize from 'snakeize';
import { ApiRequest } from '@/model/api';

//TODO: Change baseUrl from constants
const HttpClient = Axios.create({
	baseURL: '/api',
	responseType: 'json',
});

export const onRequest = (config: AxiosRequestConfig) => {
	const snakeizedData = config.data ? snakeize(config.data) : config.data;
	return {
		...config,
		data: snakeizedData,
	};
};

export const onResponse = (response: AxiosResponse) => {
	const data = response.data;
	if (data) {
		return { ...response, data: camelize(data) };
	}
	return response;
};
// @ts-ignore
HttpClient.interceptors.request.use(onRequest);
HttpClient.interceptors.response.use(onResponse);

export const callApi = async (token: string, baseUrl: string, service: ApiRequest) => {
	const { method, params, useQueryParams, url, body, customHeaders } = service;

	const requestConfig: AxiosRequestConfig = {
		method,
		headers: {
			Authorization: `Bearer ${token}`,
			...(customHeaders ? customHeaders : '')
		},
		url: `${baseUrl}/api/${url}`,
		maxRedirects: 0,
	};
	if (params && !useQueryParams) requestConfig.params = params;
	if (body) requestConfig.data = body;

	const response = await HttpClient(requestConfig);
	return response.data;
};

export default HttpClient;
