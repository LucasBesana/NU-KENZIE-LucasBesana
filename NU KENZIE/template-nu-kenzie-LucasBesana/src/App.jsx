import { FinanceForm } from "./components/FinanceForm"
import { FinanceList } from "./components/FinanceList"
import { DefaultTemplate } from "./components/DefaultTemplate"
import { useState } from "react"
import "./styles/index.scss"

function App() {
  const [newFinance, setNewFinance] = useState([])

  const addFinance = (description, value, valueType) => {
    const id = crypto.randomUUID();
    const newNote = { id, description, value, valueType };
    setNewFinance([...newFinance, newNote]);
  }



  const removeFinance = (id) => {
    const financeFiltered = newFinance.filter((finance) => {
      if(finance.id !== id){
        return finance
      }
    })
    setNewFinance(financeFiltered);
  }
  return (
    <>
      <DefaultTemplate newFinance={newFinance} addFinance={addFinance}>
        <FinanceForm addFinance={addFinance} newFinance={newFinance}/>
        <FinanceList newFinance={newFinance} removeFinance={removeFinance}/>
      </DefaultTemplate>
    </>
  )
}

export default App
