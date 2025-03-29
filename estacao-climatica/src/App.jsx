import React from 'react'
import Hippo from './Hippo'
import EstacaoClimatica from './EstacaoClimatica'

/* Enum 'estacao'

- O enum (enumeration) permite a fácil identificação do
  ícone e do nome da estação respectiva à data e hemisfério.

*/

const estacao = {

  VERAO: {
    icone: "sun",
    nome:  "Verão"
  },

  INVERNO: {
    icone: "snowman",
    nome:  "Inverno"
  },

  OUTONO: {
    icone: "leaf",
    nome:  "Outono"
  },

  PRIMAVERA: {
    icone: "fan",
    nome:  "Primavera"
  }

}

/* Classe: React.Component

- Quando você define um componente no React usando uma classe, você precisa herdar a classe React.Component. 
  Isso permite que você crie componentes que têm estado e métodos adicionais que podem ser usados para controlar 
  o comportamento do componente.

- React.Component é a classe base para todos os componentes de classe em React. Ele oferece a funcionalidade 
  básica de um componente, como o ciclo de vida (metodos como componentDidMount, componentDidUpdate, 
  componentWillUnmount), além de permitir que o componente tenha seu próprio estado (com o método this.setState()).

*/

class App extends React.Component {

  /* Estados de componentes

  - O estado em React é um objeto que armazena dados ou propriedades que podem mudar ao 
    longo do tempo. O estado é usado para armazenar informações que, quando alteradas, 
    causam a re-renderização do componente.

  */

  state = {

    latitude: null,
    longitude: null,
    estacao: null,
    data: null,
    icone: null,
    mensagemDeErro: null

  }

  /* 
  
  - Quando não é feito nada além de inicializar o estado do component em um construtor, pode ser 
    uma boa ideia, simplesmente definir o estado sem um construtor.
  
  */

  /*

  - O constructor() é o primeiro método a ser chamado quando a instância de um componente de classe é criada. 
    Aqui, ele é utilizado para inicializar o estado do componente. A função super(props) é chamada para garantir 
    que o componente React seja inicializado corretamente, recebendo as propriedades (props) que foram passadas 
    para ele. Dentro do constructor(), é comum inicializar o estado com valores padrão. No seu código, o estado 
    é inicializado da seguinte forma:
  
 

    constructor(props) {

      super(props)

      this.state = {

        latitude: null,
        longitude: null,
        estacao: null,
        data: null,
        icone: null,
        mensagemDeErro: null

      }

    }

   */

  obterLocalizacao = () => {

    navigator.geolocation.getCurrentPosition(
      
      (position) => {

        const new_date = new Date()
        const estacao = this.obterEstacao(new_date, position.coords.latitude)
        const formatter = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short' });

        const new_state = {
          data: formatter.format(new_date),
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          estacao: estacao.nome,
          icone: estacao.icone
        }

        this.setState(new_state)

      },
      
      (err) => {

        this.setState({
          mensagemDeErro: 'Tente novamente mais tarde'
        })

      }

    )


  }

  obterEstacao = (data, latitude) => {

    const anoAtual = data.getFullYear()

    const d1 = new Date(anoAtual,  5, 21)
    const d2 = new Date(anoAtual,  8, 24)
    const d3 = new Date(anoAtual, 11, 22)
    const d4 = new Date(anoAtual,  2, 21)

    const estouNoSul = latitude < 0

    if (data >= d1 && data < d2) 
      return estouNoSul ? estacao.INVERNO : estacao.VERAO
    
    if (data >= d2 && data < d3)
      return estouNoSul ? estacao.PRIMAVERA : estacao.OUTONO

    if (data >= d3 || data < d4)
      return estouNoSul ? estacao.VERAO : estacao.INVERNO

    return estouNoSul ? estacao.OUTONO : estacao.PRIMAVERA

  }

  /* Método: render()

  - O método render() é uma parte fundamental de um componente de classe no React. Ele é responsável por retornar 
    o JSX que será exibido na tela.

  */

  render() {
    
    return (

      <>
        <div className="container mt-2 text-center">
          <div className='row'>
            <div className='col-12'>

              <Hippo/>
            
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-sm-12 col-lg-6 col-xxl-4'>

              <EstacaoClimatica 

                latitude={this.state.latitude}
                longitude={this.state.longitude}
                estacao={this.state.estacao}
                icone={this.state.icone}
                obterLocalizacao={this.obterLocalizacao}

              />

            </div>
          </div>
        </div>
      </>
    
    )

  }

}

export default App