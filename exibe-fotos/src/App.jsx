import { createClient } from 'pexels'
import env from 'react-dotenv'
import React from "react"
import Busca from "./components/Busca"
export default class App extends React.Component {

  pexelsClient = null

  state = {
    photos: []
  }

  onBuscaRealizada = (termo) => {
    this.pexelsClient.photos.search({
      query: termo
    })
    .then(result => this.setState({photos: result.photos}))
  }

  componentDidMount() {
    console.log(env.PEXELS_KEY)
    this.pexelsClient = createClient(env.PEXELS_KEY)
  }

  render() {
    return (

      <div className="grid justify-content-center w-9 m-auto border-round border-1 border-200" >

        <div className="col-12">
          <h4>Exibir uma lista de...</h4>
        </div>

        <div className="col-12">
          <Busca onBuscaRealizada={this.onBuscaRealizada} />
        </div>
        <div className="col-12">
          {
            this.state.photos.map((photo, key) => (
              <div>
                key={key}
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

