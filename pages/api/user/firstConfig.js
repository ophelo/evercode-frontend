import axios from "axios";
import { getAccessToken } from '@auth0/nextjs-auth0';

export default async function firstConfig(req,res) {
    const url = (process.env.SECURE ? 'https://' : 'http://') + process.env.BACK_ENDPOINT;
    const { accessToken } = await getAccessToken(req, res);
    console.log(accessToken);
    console.log(url)
    const resp = await axios.post(url + "/api/user/firstConfig",{ username: "Andrea"},{
        headers: {
            'Authorization': "Bearer " + accessToken
        }
    }).catch(err => {
        res.status(500).json(err);
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