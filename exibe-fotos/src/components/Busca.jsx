import React, { Component } from 'react'

import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'

export default class Busca extends Component {

    state = {
        termoDeBusca: '',
    }

    onTermoAlterado = (event) => {
        console.log(event.target.value)
        this.setState({ termoDeBusca: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }

    render() {

        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="flex flex-column">

                    <IconField iconPosition='left'>
                        <InputIcon className='pi pi-search' />
                        <InputText
                            onChange={this.onTermoAlterado}
                            className='w-full'
                            placeholder='Buscar...' />
                    </IconField>

                    <Button
                        className='mt-1'
                        label='OK'
                        severity='Primary'
                        outlined />

                </div>
            </form>

        )

    }

}