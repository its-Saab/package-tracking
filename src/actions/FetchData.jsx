import axios from 'axios'


export default async () => {
    let data = await axios
      .get("https://my.api.mockaroo.com/orders.json?key=e49e6840")
      .then((res) => {
        res = res.data;
        return res;
      });
    return data;
}
