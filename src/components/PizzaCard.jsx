import style from "./PizzaCard.module.css"
import AppButton from "./AppButton"
import pizzas from "../data/pizza"

function PizzaCard({image, title, description, price, available}) {

const imagePath = `/imgs/${image}`



    return (
        <div className={style.card}>
            <div className={style.image}>
                <img src={imagePath} alt="" />
            </div>
            <div className={style.content}>
                <h5 className= "mb-1">{title}</h5>
                <p className={style.description} >{description}</p>
                <div className={`${style.price} mb-1`}>{price}</div>
                {/* //se non available non mostrare bottone */}
                {available && <AppButton text="Add to cart" />}
                
            </div>
            
            
        </div>
    )
}

export default PizzaCard