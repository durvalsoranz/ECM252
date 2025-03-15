import React from 'react';
import OrderView from './Order.jsx'
import Feedback from './Feedback.jsx'

const App = () => Page()

const Page = () => {

  const textoOK = 'Já chegou'
  const textoNOK = 'Não chegou ainda'
  const funcaoOK = () => alert('Obrigado por confirmar a entrega')
  const funcaoNOK = () => alert('Vamos verificar o que aconteceu')

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
      <div className="container border mt-2 px-3 pb-3">

        <OrderView
        
          orders={[
            {icon: "hdd", date: "22/04/2021", name: "SSD", text: "SSD Kingston A400 - SSD"},
            {icon: "book", date: "20/04/2021", name: "Livro", text: "Concrete Mathematics - Donald Knuth"},
            {icon: "laptop", date: "22/01/2021", name: "Notebook", text: "Notebook Dell - 8 GB - i5"}
          ]}

          componenteFeedback = {componenteFeedback}

        />

      </div>
      
    </>
  )

}


export default App
