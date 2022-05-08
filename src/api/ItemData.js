export const baseUrl = "http://localhost:8080/item";

export const getItems = async()=> {
    try {
        const response = await fetch(baseUrl + "/all");
        const data = await response.json();
        return data;
    } catch (e) {
        console.log('error', e);
    }
}