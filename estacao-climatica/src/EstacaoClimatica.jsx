import React, { Component } from 'react'

export default class EstacaoClimatica extends Component {

    timer = null

    state = {
        data: null
    }

    componentDidMount() {
        
        this.timer = setInterval(() => {
            this.setState({data: new Date().toLocaleTimeString('en-US')})
        }, 1000)

    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {

        const text_coord = (this.props.estacao === null) ? 
                            "Clique no botão para saber a sua estação" : 
                            `Coordenadas: ${this.props.latitude}, ${this.props.longitude}. Data: ${this.state.data}`

        return (
            <>
                <div className='card'>
                    <div className="card-body">
                        <div className='d-flex align-items-center border rounded mb-2' style={{height: '6rem'}}>
                            <i className={`fa-${this.props.icone} fas fa-5x`}></i>
                            <p className='w-75 ms-3 text-center fs-1'>{this.props.estacao}</p>
                        </div>
                        <div>
                            <p className='text-center'>
                                {text_coord}
                            </p>
                            <button type="button" onClick={() => this.props.obterLocalizacao()} className='btn btn-outline-primary w-100'>Qual a minha estação?</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
