import axios from "axios";
import { getAccessToken } from '@auth0/nextjs-auth0';

export default async function firstConfig(req,res) {
    const { accessToken } = await getAccessToken(req, res);
    console.log(accessToken);
    const resp = await axios.post(process.env.BACK_ENDPOINT+ "/api/user/firstConfig",{ username: "Andrea"},{
        headers: {
            'Authorization': "Bearer " + accessToken
        }
    }).catch(err => {
        res.status(500).json(err.response.data);
    })
    if (!resp) return res;
    if (resp.data?.status == "ok") {
        console.log(resp.data);
        res.writeHead(301, {
            Location: '/'
        })
        res.end();
    }
}