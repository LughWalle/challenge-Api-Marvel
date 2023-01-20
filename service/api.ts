import axios from 'axios';
import md5 from 'blueimp-md5';
require('dotenv').config();

const url: any = process.env.NEXT_PUBLIC_URL;
const pubKey: any = process.env.NEXT_PUBLIC_PUB_KEY;
const pvKey: any = process.env.NEXT_PUBLIC_PV_KEY;
const timeStamp = Number(new Date());

const hash = md5(timeStamp + pvKey + pubKey);

const apiMarvel = axios.create({
  baseURL: url,
  params: {
    ts: timeStamp,
    apikey: pubKey,
    hash,
    limit: '30',
  }
})

export default apiMarvel;
