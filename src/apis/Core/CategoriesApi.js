import axios from "axios";

export const getCategories = async () => {
    const res = await axios.get("/categories");
    return await res.data.data;
    console.log(res.data.data)
};