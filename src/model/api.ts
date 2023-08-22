import { AxiosInstance, Method } from 'axios';

export type HttpResponse<T> = {
	status: string;
	data: T;
};

export type ApiContext = {
	client: AxiosInstance;
	baseUrl: string;
};

export type ApiRequest = {
	url: string;
	method: Method;
	useQueryParams?: boolean;
	params?: {
		[key: string]: any;
	};
	body?: {
		[key: string]: any;
	};
	customHeaders?: {
		[key: string]: string;
	};
	onSuccessCallback?: Function;
	onFailureCallback?: Function;
};
