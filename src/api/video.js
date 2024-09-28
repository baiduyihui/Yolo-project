import { http } from "@/utils/http";
export const getVideoAPI = () => {
  return http.get("/play");
};
