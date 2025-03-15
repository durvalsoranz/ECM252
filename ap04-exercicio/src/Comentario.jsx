function Comentario(props) {

    let foto = `fa-solid fa-${props.foto} fa-7x`

    return (

        <>

            <div className="d-flex align-items-center">
                <i className={foto}></i>
            </div>
            
            <div className="flex-grow-1 flex-column py-3 ms-3 ml-4">

                <h3 className="text-left">{props.nome}</h3>

                <hr />

                <p className="text-left">{props.texto}</p>

                <div className="text-muted">{props.data}</div>

            </div>

        </>

    )

}

export default Comentario