export const FinanceCard = ({ description, value, id, removeFinance, valueType }) => {

    return (
        <li className="li__card">
            {valueType === "Entrada" ? <div className="green__border"></div> : <div className="grey__border"></div>}
            <div className="finance__card">
                <div className="finance__itens">
                    <h3 className="title three">{description}</h3>
                    <p className="letter__body">{valueType}</p>
                </div>
                <div className="finance__value">
                    <p>R${value}</p>
                    <button className="button small" onClick={() => removeFinance(id)}>Excluir</button>
                </div>
            </div>
        </li>
    )
}