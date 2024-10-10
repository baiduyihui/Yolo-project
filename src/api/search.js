import { http } from '@/utils/http';

export function searchAlarmApi() {
  return {
    getState: (params) => {
      return http.post('/Photos', params);
    },
    deleteState: (params) => {
      return http.delete('/delete', { data: params });
    },
    downLoadState: (params) => {
      return http.post('/download', params);
    },
  };
}