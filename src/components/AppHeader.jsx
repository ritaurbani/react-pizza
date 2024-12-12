import style from "./AppHeader.module.css"


function AppHeader() {

    return (
        <header className={style.header}>
            <div className="container">
                <h2 className={style.title}>IL MIO MENU</h2>
            </div>
        </header>

    )
}

export default AppHeader