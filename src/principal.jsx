import axios from 'axios'

export function Principal(){
    axios.get('http://127.0.0.1:8000/products/listProducts')
    .then(response =>{
        console.log(response.data)
    })
}