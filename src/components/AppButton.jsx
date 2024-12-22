import style from "./AppButton.module.css"

function AppButton({text}) {
    

    return (
        <button className={style.btn}>
            {text}
        </button>

    )
}

export default AppButton