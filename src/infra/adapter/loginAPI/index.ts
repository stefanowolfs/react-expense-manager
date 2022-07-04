import { NetworkException } from "../../errors/errorTypes";
import http from "../http";

export async function login(): Promise<string> {
  try {
    const response = await http.get("/login");
    return response.data;
  } catch (err) {
    console.error("login-api: ", err);
    throw new NetworkException("Error with login");
  }
}
