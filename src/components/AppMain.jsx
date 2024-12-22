
import PizzaCard from "./PizzaCard"
import pizzas from "../data/pizza"


function AppMain() {

    //se true && => mostro banner pubblicitario altrimenti NULLA
    const isBlackFriday = true

    const printBlackFridayBanner = () => (
        <section>Oggi sconto Black Friday!!!!!!!</section>
    )

    const printPizzas = () => {
      return pizzas.map((pizza)=>( 
        <div className="col" key={pizza.id}>
            <PizzaCard
                image={pizza.image}
                title={pizza.title}
                description={pizza.description}
                price={pizza.price} 
                available={pizza.available}
            />
        </div>
       ))
    }

    //check if array is empty-EMPTY SPACE MANAGE-se in data cancello tutto mostrera'messaggio
    const printEmptyState = () => <p>Non ci sono le pizze vhe vuoi</p>

    return (
        <main>
            <div className="container">
                {

                isBlackFriday &&
                printBlackFridayBanner()

                }
                <section className="text-center mb-2">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nam vero dolorem ad sequi magni repellendus nemo iste consectetur. Quod quo quam nemo doloremque saepe, minima ipsam praesentium perspiciatis odit!
                    </p>
                </section>

                <section> 
                    <div className="row">
                        
                        {pizzas.length> 0 ? printPizzas(): printEmptyState()}
                    
                        {/* <div className="col">
                            <PizzaCard/>
                        </div>
                        <div className="col">
                            <PizzaCard/>
                        </div> */}
                    </div>

                </section>
            </div>

        </main>
    )
}

export default AppMain