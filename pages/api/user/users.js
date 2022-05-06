import axios from "axios";
import { getAccessToken } from '@auth0/nextjs-auth0';

export default async function users(req,res) {
    const { accessToken } = await getAccessToken(req, res);
    const respBody = await axios.get(process.env.BACK_ENDPOINT+ "/user/users",{
        headers: {
            'Authorization': "Bearer " + accessToken
        }
    });
    res.status(200).json({data: respBody.data});

}