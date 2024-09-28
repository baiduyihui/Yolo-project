import { http } from '@/utils/http';

export function searchAlarmApi() {
  return {
    getState: (params) => {
      return http.post('http://ipbdtest0001.natapp1.cc/api/Photos', params);
    },
    deleteState: (params) => {
      return http.delete('http://ipbdtest0001.natapp1.cc/api/delete', { data: params });
    },
    downLoadState: (params) => {
      return http.post('http://ipbdtest0001.natapp1.cc/api/download', params);
    },
  };
}