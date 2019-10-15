import React, {Component} from 'react';
import { BuscaContratosForm } from './BuscaContratosForm'

export class EmptyPage extends Component {

    render() {
        return (

            <div className="card">
                <h1>Página onde ficará o form de Busca</h1>
                <BuscaContratosForm/>
            </div>


        );
    }
}