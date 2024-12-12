import style from "./AppButton.module.css"

function AppButton() {
    const buttonText = "Add to Cart"

    return (
        <button className={style.btn}>
            {buttonText}
        </button>

    )
}

export default AppButton