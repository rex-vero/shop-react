import { useLoaderData } from "react-router-dom";

const Single = () => {
    const data = useLoaderData();

    return (
        <div className="container-fluid mt-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
                {data &&
                    <>
                        <div className="col">
                            <img className="img" alt={data.title} src={data.image} />
                        </div>
                        <div className="col">
                            <h1 className="text-center">{data.title}</h1>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default Single;