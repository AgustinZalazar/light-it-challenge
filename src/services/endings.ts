import axios from "axios";


export function allEndings() {
    return axios('https://us-central1-prueba-front-280718.cloudfunctions.net/terminaciones')
}