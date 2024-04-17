import { FinanceCard } from "./FinanceCard";

export const FinanceList = ({ description, value, newFinance, removeFinance, val }) => {

    const ValueList = () => {
        if (newFinance.length === 0) {
            return (
                <>
                    <p className="title two">Você ainda não possui nenhum lançamento</p>
                </>
            )
        } else {
            return (
                <>
                    <ul className="finance__container">
                        {newFinance.map((note) => {
                            const { description, value, id, newFinance, valueType
                            } = note
                            return (<FinanceCard key={id} id={id} description={description}
                                value={value} valueType={valueType} removeFinance={removeFinance} />
                            )
                        })}
                    </ul>
                </>
            )
        }
    }

    return (
        <section className="resume__container">
            <h3 className="title three">Resumo Financeiro</h3>
            <ValueList /> 
        </section>
    )
}