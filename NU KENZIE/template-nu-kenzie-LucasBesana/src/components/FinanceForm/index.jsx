import { useState } from "react";
import { Input } from "../Input";
import { TotalValue } from "../TotalSection";

export const FinanceForm = ({ addFinance, newFinance }) => {
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [valueType, setValueType] = useState("Entrada");


    const submit = (e) => {
        e.preventDefault()
        addFinance(description, Number(value), valueType);

        setDescription("");
        setValue("");
        setValueType("Entrada");
    };

    return (
        <section className="form__container">
            <form onSubmit={submit} className="form__content">
                <p className="letter__body">Descrição</p>
                <Input 
                    type="text"
                    placeholder="Digite aqui sua descrição"
                    id="description"
                    value={description}
                    setValue={setDescription}
                />
                <p className="form__example">Ex: Compra de roupas</p>
                <p className="letter__body value__form">Valor(R$)</p>
                <Input
                    type="number"
                    placeholder="1"
                    id="value"
                    value={value}
                    setValue={setValue}
                />
                <p className="letter__body type__value">Tipo de valor</p>
                <select className="select__option" name="type" id="type" required value={valueType}
                    onChange={(e) => setValueType(e.target.value)}>
                    <option value="Entrada" className="select__option">Entrada</option>
                    <option value="Despesa">Despesa</option>
                </select>
                <div>
                    <button className="button"type="submit">Inserir valor</button>
                </div>
            </form>
            <TotalValue newFinance={newFinance} />
        </section>
    )
}