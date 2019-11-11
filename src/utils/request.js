import axios from "axios";

const server = axios.create({
    timeout:5000,
    withCredentials:true
})

server.interceptors.request.use((config)=>{
    if(config.method=="get"){
        config.params={...config.data};

    }
}),(err)=>{
    releaseEvents.reject(err);
}
server.interceptors.response.use((res)=>{
    if(res.status==200){
        return res.data;
    }
}),(err)=>{
    releaseEvents.reject(err);
}




