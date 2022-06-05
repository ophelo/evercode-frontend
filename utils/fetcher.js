import axios from "axios"

export const fetcherGet = args => axios.get(args.url,{ 
    params: args.params,
    headers: {
        Authorization: "Bearer "+ args.token
    }
}).then(res => res.data)

export const fetcherPost = args => axios.post(args.url,args.body,{
    params: args.params,
    headers: {
        Authorization: "Bearer "+ args.token
    }
}).then(res => res.data)