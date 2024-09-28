import { http } from "@/utils/http";
export const getPicturesAPI = () => {
  return http.get("/photos");
};
