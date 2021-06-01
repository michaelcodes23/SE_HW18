import data from './data.json';

function Receipt(){
    return(
        <>
            {data.map((value, index)=>{
                if(!value.paid){
                return(
                <div className="receipts">
                <h2>{value.person}</h2>
                <h4><span className = "boldText">Main: </span>{value.order.main} </h4>
                <h4><span className = "boldText">Protein: </span>{value.order.protein} </h4>
                <h4><span className = "boldText">Rice: </span>{value.order.rice} </h4>
                <h4><span className = "boldText">Sauce: </span>{value.order.sauce} </h4>
                <h4><span className = "boldText">Drink: </span>{value.order.drink} </h4>
                <h4><span className = "boldText">Cost: </span>{value.order.cost} </h4>
                </div>
                )
            }
            })}
        </>
    )
}

export default Receipt;