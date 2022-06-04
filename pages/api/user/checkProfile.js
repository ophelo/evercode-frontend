
import { getAccessToken } from '@auth0/nextjs-auth0';
import axios from 'axios';

export default async function firstConfig(req,res) {
    const url = (process.env.SECURE ? 'https://' : 'http://') + process.env.BACK_ENDPOINT;
    
    const { accessToken } = await getAccessToken(req, res);

    const resp = await axios.get(url + "/api/user/checkProfile", {
        headers: {
            'Authorization': "Bearer " + accessToken
        }
    }).catch(err => {
        res.status(500).json(err);
    })
    if (!resp) return res;
    if (resp.data?.status == true) {
        res.writeHead(302, {
            Location: '/'
        })
        res.end();
    }else{
        res.writeHead(302, {
            Location: '/user/firstConfig'
        })
        res.end();
    }
}