import { http } from '@/utils/http';

export function searchAlarmApi() {
  return {
    getState: (params) => {
      return http.post('/Photos', params);
    },
    deleteState: (params) => {
<<<<<<< Updated upstream
      return http.delete('delete', { data: params });
=======
      return http.delete('/delete', { data: params });
>>>>>>> Stashed changes
    },
    downLoadState: (params) => {
      return http.post('/download', params);
    },
  };
}