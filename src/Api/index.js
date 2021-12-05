import {
    getMessage,
    handleResponse,
    performNetworkRequest,
    getConfigs,
    dataToQueryParameter
} from "./HelperFunction";
import { base_url } from './configs'

export const get = async (endpoint) => {
    const url = base_url + endpoint;
    try {
        const networkResult = await performNetworkRequest(url);
        const result = await handleResponse(networkResult);
        return Promise.resolve(result);
    } catch (e) {
        const message = getMessage(e);
        return Promise.reject(message);
    }
};

export const post = async (endpoint, body, formData, queryParams) => {
    const url = base_url + endpoint + dataToQueryParameter(queryParams);

    const configs = getConfigs('POST', body, formData);
console.log(configs,'Shit')
    try {
        const networkResult = await performNetworkRequest(url, configs);
        const result = await handleResponse(networkResult);

        return Promise.resolve(result);
    } catch (e) {
        console.log('e == ', e);
        const message = getMessage(e);
        return Promise.reject(message);
    }
};

const Api = {
    get: get,
    post: post
}
export default Api;