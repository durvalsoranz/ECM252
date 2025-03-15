import ListaComentarios from './ListaComentarios'
import Feedback from './Feedback'

const App = () => {
  
  const textoOK = 'Aprovar'
  const textoNOK = 'Não aprovar'
  const funcaoOK = () => alert('Obrigado por aprovar o comentário')
  const funcaoNOK = () => alert('Vamos verificar o comentário')

  const componenteFeedback = (
    
      <Feedback 
        textoOK={textoOK} 
        textoNOK={textoNOK} 
        funcaoOK={funcaoOK} 
        funcaoNOK={funcaoNOK}
      />

  )
  
  return (

    <>

      <ListaComentarios

        comentarios={[
          {foto: "user-tie", nome: "Zézinho", texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo scelerisque sem euismod hendrerit. Nulla et tempus erat, id fringilla nisl. Sed consectetur finibus tellus nec molestie. Quisque rhoncus maximus nisi, eget ultricies urna egestas id. Etiam ac libero et nisi convallis fringilla nec eu felis.", data: "20/12/2024"},
          {foto: "user-tie", nome: "Zézinha", texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo scelerisque sem euismod hendrerit. Nulla et tempus erat, id fringilla nisl. Sed consectetur finibus tellus nec molestie. Quisque rhoncus maximus nisi, eget ultricies urna egestas id. Etiam ac libero et nisi convallis fringilla nec eu felis.", data: "20/12/2024"},
        ]}

        feedback = {componenteFeedback}

      />
      
    </>

  )
}

export default App