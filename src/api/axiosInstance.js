import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://jsonplaceholder.org",
});

axios.get("https://jsonplaceholder.org/users");
axios.get("https://jsonplaceholder.org/users/1");
axios.post("https://jsonplaceholder.org/users");

apiInstance.get("/users");
apiInstance.get("/users/1");
apiInstance.post("/users");
apiInstance.put("/users/1");
