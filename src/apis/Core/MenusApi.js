import axios from "axios";

export const getMenus = async () => {
    const res = await axios.get("/menus");
    return await res.data.data;
    console.log(res.data.data)
};