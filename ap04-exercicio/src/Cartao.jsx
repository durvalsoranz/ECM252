function Cartao(props) {

    return (

        <>

            <div className="card">
                
                <div className="card-body d-flex">{props.children}</div>
                
            </div>

            {props.feedback}

        </>

    )

}

export default Cartao