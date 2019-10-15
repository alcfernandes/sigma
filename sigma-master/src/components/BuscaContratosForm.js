import React, { Component } from 'react';
import { SelecionaEmpresa } from './SelecionaEmpresa'
import { SelecionaSituacaoContrato } from './SelecionaSituacaoContrato'
import { SelecionaEstadoContrato } from './SelecionaEstadoContrato'
import { SelecionaEquipamento } from './SelecionaEquipamento'
import { SelecionaTipoServico } from './SelecionaTipoServico'



export class BuscaContratosForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             empresa: '',
             situacao: '',
             estado: '',
             equipamento: ''
        }
    }
    
    componentDidMount(){
        // this.setState({countriesData: this.countryService.getCountries(this)})
    }

    setaEmpresa(empresa) {
        this.setState({empresa: empresa.id})
    }

    setaSituacao(situacao) {
        this.setState({situacao: situacao.id})
    }
   
    setaEstado(estado) {
        this.setState({estado: estado.id})
    }
   
    setaEquipamento(equipamento) {
        this.setState({equipamento: equipamento.id})
    }
   
    setaTipoServico(tipoServico) {
        this.setState({tipoServico: tipoServico.id})
    }
   

    render() {
        return (
            <div className="card card-w-title">

                <div className="p-grid">

                    <div className="p-col-12">
                        <label htmlFor="empresa">Empresa</label>
                    </div>
                    <div className="p-col-12" style={{marginBottom:'10px'}}>
                        <SelecionaEmpresa onSelect={this.setaEmpresa.bind(this)}/>
                    </div>

                    <div className="p-col-12">
                        <label htmlFor="situacao">Situação</label>
                    </div>
                    <div className="p-col-12">
                        <SelecionaSituacaoContrato onSelect={this.setaSituacao.bind(this)}/>
                    </div>

                    <div className="p-col-12">
                        <label htmlFor="estado">Estado</label>
                    </div>
                    <div className="p-col-12">
                        <SelecionaEstadoContrato onSelect={this.setaEstado.bind(this)}/>
                    </div>

                    <div className="p-col-12">
                        <label htmlFor="estado">Equipamento</label>
                    </div>
                    <div className="p-col-12">
                        <SelecionaEquipamento onSelect={this.setaEquipamento.bind(this)}/>
                    </div>

                    <div className="p-col-12">
                        <label htmlFor="estado">Tipo de Serviço</label>
                    </div>
                    <div className="p-col-12">
                        <SelecionaTipoServico onSelect={this.setaTipoServico.bind(this)}/>
                    </div>

                    <div className="p-col-12">
                        <label htmlFor="selecoes">Seleções</label>
                    </div>
                    <div className="p-col-12">
                        Empresa     : <strong>{this.state.empresa}</strong> <br/>
                        Situação    : <strong>{this.state.situacao}</strong> <br/>
                        Estado      : <strong>{this.state.estado}</strong> <br/>
                        Equipamento : <strong>{this.state.equipamento}</strong> <br/>
                        Tipo Serviço: <strong>{this.state.tipoServico}</strong> <br/>
                    </div>


                </div>
            </div>

        );
    }
}