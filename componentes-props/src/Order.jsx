function Order(props) {

    let icon = `fa-solid fa-${props.icon} fa-3x fa-shake`

    return (

        <div className="col-sm-12 col-lg-6 col-xxl-4 mb-3">

            <div className="card">
                
                <div className="card-header text-muted">{props.date}</div>
                <div className="card-body d-flex">

                    <div className="d-flex align-items-center">
                        <i className={icon}></i>
                    </div>
                    
                    <div className="border flex-grow-1 flex-column py-3 ms-3">

                        <h3 className="text-center">{props.name}</h3>
                        <p className="text-center">{props.text}</p>

                    </div>

                </div>
            
            </div>

        </div>

    )

}

function OrderView(props) {

    return (

        <div className="container border mt-2 px-3 pb-3">

            <h3 className="text-center m-3">Seus pedidos</h3>

            <div className="row">

                { 

                    (props.orders).map(order => (

                        <Order
                            icon={order.icon}
                            date={order.date}
                            name={order.name}
                            text={order.text}
                        />

                    ))

                }

            </div>

        </div>

    )

}

export default OrderView;