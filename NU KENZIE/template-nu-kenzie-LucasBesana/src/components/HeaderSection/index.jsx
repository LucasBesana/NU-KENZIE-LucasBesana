import logo from "../../../public/logo.svg";

export const HeaderSection = () => {
    return (
        <header className="header__container">
            <div className="header__div">
                <img src={logo} alt="logo nu kenzie" className="image__header" />
            </div>
        </header>
    )
}

