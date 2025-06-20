// utils/apiClient.ts
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "/api";

export const callProtectedAPI = async (
  endpoint: string,
  token: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  data: any = {}
) => {
  const response = await axios({
    method,
    url: `${API_URL}/${endpoint}`,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
