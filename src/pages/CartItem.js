import Buttons from "../components/Buttons";

const CartItem = ({ item }) => {
    return (
        <li className="list-group-item">
            <div className="card mb-3">
                <div className="row g-0 align-items-center">
                    <div className="col-md-4">
                        <img src={item.images[0]} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text"><small className="text-body-secondary">{item.price}$</small></p>
                            <p className="card-text"><small className="text-body-secondary">count: {item.count}</small></p>
                        </div>
                    </div>
                    <div>
                        <Buttons item={item} />
                    </div>
                </div>
            </div>
        </li>
    );
}

export default CartItem;