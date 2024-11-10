import { useLoaderData } from "react-router-dom";
import ProductSlider from "../maincontent/ProductSlider";
import { ToastContainer } from "react-toastify";


const Single = () => {
    const data = useLoaderData();

    return (
        <div className="container-fluid mt-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
                {data &&
                    <>
                        <div className="col-4">
                            <ProductSlider item={data} page='s' />
                        </div>
                        <div className="col-6">
                            <h1 className="text-center">{data.title}</h1>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default Single;