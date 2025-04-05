import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
        <div className='border rounded-2 p-3 d-flex flex-column align-items-center justify-content-center'>
            <div className="spinner-border text-primary my-4" role="status" style={{"width": '3rem', "height": '3rem'}}></div>
            <p className="text-primary">{this.props.mensagem}</p>
        </div>
    )
  }
}

Loading.defaultProps = {
    mensagem: 'Carregando...'
}
