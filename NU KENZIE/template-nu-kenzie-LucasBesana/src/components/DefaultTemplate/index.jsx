import { HeaderSection } from "../HeaderSection";

export const DefaultTemplate = ({ children }) => {
    return (
        <>
            <HeaderSection/>
            <main className="main__container">
                {children}
            </main>
        </>
    )
}
