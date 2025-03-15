import Comentario from "./Comentario"
import Cartao from "./Cartao"

function ListaComentarios(props) {

    return (

        <div className="container border mt-2 px-3 pb-3">

            <h3 className="text-center m-3">Comentários</h3>

            <div className="row">

                {props.comentarios.map(comentario => (

                    <Cartao feedback={props.feedback}>

                        <Comentario 
                        
                            foto  = {comentario.foto}
                            nome  = {comentario.nome}
                            texto = {comentario.texto}
                            data  = {comentario.data}
                        
                        />

                    </Cartao>

                ))}

            </div>

        </div>

    )

}

export default ListaComentarios