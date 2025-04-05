import React, { Component } from 'react'

import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'

export default class Busca extends Component {

    state = {
        termDeBusca: '',
    }

    render() {

        return (

            <div className="flex flex-column">

                <IconField iconPosition='left'>
                    <InputIcon className='pi pi-search' />
                    <InputText className='w-full' placeholder='Buscar...' />
                </IconField>

                <Button className='mt-1' label='OK' severity='Primary' outlined />

            </div>

        )

    }

}