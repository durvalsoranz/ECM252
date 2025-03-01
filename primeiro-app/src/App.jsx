const App = () => {
  return form()
}

import './styles.css'

const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8}
const textoDoRotulo = "Nome:"
const aoClicar = () => alert('Clicou!')

const textoDoBotao = () => {
  return 'Enviar'
}

const form =  () => {
  return (

    <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
      <label htmlFor="nome" className="rotulo" style={{display: 'block', marginBottom: 4}}>{textoDoRotulo}</label>
      {/* input[type=text]#nome */}
      <input type="text" id="nome" style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none'}}/>
      <button onClick={aoClicar} style={estilosBotao}>{textoDoBotao()}</button>
    </div>

  )
}

export default App