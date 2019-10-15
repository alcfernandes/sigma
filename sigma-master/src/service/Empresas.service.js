import axios from 'axios';

export const getEmpresasLookup = () => {
    return axios.get('http://127.0.0.1:8000/empresas/lookup/').then(res => res.data)
}
