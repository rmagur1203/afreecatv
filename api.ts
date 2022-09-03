import axios, { Axios } from 'axios';

export class API {
    private client: Axios;

    constructor(baseURL: string) {
        this.client = axios.create({
            baseURL,
            headers: {
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
            }
        });
    }

    public async get(url: string, params?: any, options?: any) {
        return await this.client.get(url, {
            params,
            ...options
        });
    }

    public async post(url: string, data?: any, options?: any) {
        return await this.client.post(url, data, options);
    }
}