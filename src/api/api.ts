import axios from "axios"
import {TableData} from "../types/types";

const instance = axios.create({
    baseURL: "http://www.filltext.com/",
});

const DEFAULT_PARAMS = {
    id: "{number|1000}",
    firstName: "{firstName}",
    lastName: "{lastName}",
    email: "{email}",
    phone: "{phone|(xxx)xxx-xx-xx}",
    address: "{addressObject}",
    description: "{lorem|32}"
};

export const API = {
    getData(size: string) {
        const params = size === "big" ? {rows: 1000, delay: 3} : {rows: 32};

        return instance.get<TableData>("", {
            params: {...DEFAULT_PARAMS, ...params}
        }).then(response => response.data)
    }
};

