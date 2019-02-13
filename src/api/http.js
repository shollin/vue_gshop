/**
 * http发送ajax请求工具类
 * @param {*} url 
 * @param {*} data 
 * @param {*} method 
 */
import axios from 'axios';

function http(url, data = {}, method = 'GET') {

    return new Promise((resole, reject) => {
        let promise;
        if (method === 'GET') {
            let dataStr = '';
            Object.keys(data).forEach(key => {
                dataStr += `${key}=${data[key]}&`;
            });

            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
                if (url.lastIndexOf('?') != -1) {
                    url = `${url}&${dataStr}`;
                } else {
                    url = `${url}?${dataStr}`;
                }
            }
            console.log(url, '请求url');
            promise = axios.get(url);
        } else {
            promise = axios.post(url, data);
        }
        promise.then(res => {
            console.log(res);
            resole(res);
        }).catch(err => {
            console.log(err);
            reject(err);
        });
    });
}

function get(url, data = {}) {
    return http(url, data, 'GET');
}

function post(url, data = {}) {
    return http(url, data, 'POST');
}
export default { http, get, post };