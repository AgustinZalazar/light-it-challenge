import axios from "axios";


export function allOpenings() {
    return axios('https://us-central1-prueba-front-280718.cloudfunctions.net/aberturas')
}