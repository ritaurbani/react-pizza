import AppButton from "./AppButton";
import style from "./AppHeader.module.css"


function AppHeader() {
    //dobbiamo vedere se utente loggato
    const isLoggedIn = true;
    const username = ""

    //possiamo usare funzioni 
    const printGreeting = () => <p>Ciao {username || "unknown user"}</p>
    const printLogin = () => <AppButton text="Login" />

    return (
        <header className={style.header}>
            <div>
                {isLoggedIn ? printGreeting() : printLogin()}
                
            </div>
            <div className="container">
                <h2 className={style.title}>IL MIO MENU</h2>
            </div>
        </header>

    )
}

export default AppHeader