
import PizzaCard from "./PizzaCard"

function AppMain() {

    return (
        <main>
            <div className="container">
                <section className="text-center mb-2">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nam vero dolorem ad sequi magni repellendus nemo iste consectetur. Quod quo quam nemo doloremque saepe, minima ipsam praesentium perspiciatis odit!
                    </p>
                </section>

                <section> 
                    <div className="row">
                        <div className="col">
                            <PizzaCard/>
                        </div>
                        <div className="col">
                            <PizzaCard/>
                        </div>
                        <div className="col">
                            <PizzaCard/>
                        </div>
                    </div>

                </section>
            </div>

        </main>
    )
}

export default AppMain