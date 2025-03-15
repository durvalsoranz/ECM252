function Cartao(props) {

    return (

        <div className="card">
            
            <div className="card-body d-flex">{props.children}</div>
            <div className="card-footer">{props.feedback}</div>
        
        </div>

    )

}

export default Cartao