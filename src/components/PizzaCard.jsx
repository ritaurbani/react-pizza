import style from "./PizzaCard.module.css"
import AppButton from "./AppButton"

function PizzaCard() {


    
//mettimao dati pizza in maniera dinamica da queso obj statico
    const pizza = {
        image: "/imgs/ciambellone.jpeg",
        title: "Original",
        description: "Tomato souce, mozzarella & oregano",
        price: "€ 6.00",
    };

    return (
        <div className={style.card}>
            <div className={style.image}>
                <img src={pizza.image} alt="" />
            </div>
            <div className={style.content}>
                <h5 className= "mb-1">{pizza.title}</h5>
                <p className={style.description} >{pizza.description}</p>
                <div className={`${style.price} mb-1`}>{pizza.price}</div>
                <AppButton />
            </div>
            
            
        </div>
    )
}

export default PizzaCard