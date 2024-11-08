import { Navigate } from "react-router-dom";

export const fetchData = async (params, url) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const res = await fetch(baseUrl + url + `/${params ? params.id : ''}`);
    if (res.status === 200) {
        return await res.json();
    }
    if (res.status === 401) {
        return <Navigate to={'auth/login'} />
    }
    throw new Error(res.status);
}