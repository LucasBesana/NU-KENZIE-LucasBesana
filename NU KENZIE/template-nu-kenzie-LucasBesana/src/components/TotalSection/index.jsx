export const TotalValue = ({ newFinance }) => {
    console.log(newFinance);
    if (newFinance.length === 0) {
        return (
            <></>
        )
    } else {
        const entrada = newFinance.filter(v => v.valueType === "Entrada");
        const despesa = newFinance.filter(v => v.valueType === "Despesa");
        let finalValue = 0
        if (entrada.length && despesa.length !== 0) {
            const entradaSoma = entrada.reduce((total, value) => total + value.value, 0);
            const despesaSoma = despesa.reduce((total, value) => total + value.value, 0);
            finalValue = entradaSoma - despesaSoma

        } else if (entrada.length > 0 || despesa.length === 0) {
            finalValue = entrada.reduce((total, value) => total + value.value, 0);
        } else {
            finalValue = despesa.reduce((total, value) => total + value.value, 0);
        }
        return (
            <section className="value__container">
                <div className="value__content">
                    <h3 className="title three value__title">Valor total:</h3>
                    <p className="title three value__number">R${finalValue.toFixed(2)}</p>
                </div>
                <p className="letter__body saldo__content">Valor referente ao saldo</p>
            </section>
        )
    }
}