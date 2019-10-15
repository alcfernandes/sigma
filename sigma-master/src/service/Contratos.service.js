import axios from 'axios';

export const getSituacoesContrato = () => {
    return axios.get('http://127.0.0.1:8000/contratos/situacoes/').then(res => res.data)
}

export const getEstadosContrato = () => {
    return axios.get('http://127.0.0.1:8000/contratos/estados/').then(res => res.data)
}
