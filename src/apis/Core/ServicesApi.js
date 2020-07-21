import axios from "axios";

export const getServices = async () => {
    const res = await axios.get("/services");
    return await res.data.data;
    console.log(res.data.data)
};