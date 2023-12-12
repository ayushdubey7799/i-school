const setAuthHeaders = (config,urlSegments,data) => {
   let type = urlSegments[2];

   if(type == 'activate' || type == 'forgetpwd'){
        delete config.headers.Authorization
        delete config.headers['X-Client-Code']
   }
   else if(type = 'resetpwd'){
       config.headers.Authorization = `Bearer ${data.token}`;
       delete config.headers['X-Client-Code']
   }

   console.log("Authentication Configs ===> ",config);
   return config;
}

export default setAuthHeaders;