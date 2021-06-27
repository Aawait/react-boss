
/* 封装axios请求 */

import axios from 'axios'

export default function ajax(url,data={},type='GET'){

    if(type === 'GET'){
        let query = ''

        Object.keys(data).forEach(key => {
            query += `${key}=${data[key]}&`
        })
        if(query){
            query = query.slice(0,-1)
        }

        return axios.get(url+'?'+query)

    }else {
        return axios.post(url,data)
    }
   
}