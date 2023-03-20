// https://jsonplaceholder.ir/posts?_start=0&amp;_limit=10


import ax from 'axios'
const axiosInstance = () => {
    const axios = ax.create(
        {
            baseURL: ' https://jsonplaceholder.ir/',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            }
        }
    )
    axios.interceptors.response.use(
        function (config) {
        return config;
      }
      , function (error) {    
        return Promise.reject(error);
      });
   
    return axios
}

export default axiosInstance()


