import axios from "./axios";

export async function getAdvice() {
    const res = await axios.get(`/advice`)
    return res.data
}