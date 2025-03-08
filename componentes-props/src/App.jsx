import OrderView from './Order.jsx'

const App = () => Page()

const Page = () => {

  return (
    <>
      <div className="container border mt-2 px-3 pb-3">

        <OrderView
        
          orders={[
            {icon: "hdd", date: "22/04/2021", name: "SSD", text: "SSD Kingston A400 - SSD"},
            {icon: "book", date: "20/04/2021", name: "Livro", text: "Concrete Mathematics - Donald Knuth"},
            {icon: "laptop", date: "22/01/2021", name: "Notebook", text: "Notebook Dell - 8 GB - i5"}
          ]}

        />

      </div>
    </>
  )

}

export default App
