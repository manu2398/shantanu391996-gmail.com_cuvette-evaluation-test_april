import axios from "axios";
import client from "./apiClient";

export const getDataAPI = async (url, token) => {
  const res = await client.get(`/api/${url}`, {
    headers: { Authorization: token },
    // headers: { "Content-Type": "application/json" },
    // credentials: "include",
  });
  return res;
};

export const postDataAPI = async (url, post, token) => {
  const res = await client.post(`/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};
