import axios from 'axios';

export const getTiposServicoLookup = () => {
    return axios.get('http://127.0.0.1:8000/tipos-servico/lookup/').then(res => res.data)
}

