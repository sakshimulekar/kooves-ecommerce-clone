import { PRODUCT_FAIL, PRODUCT_REQ, PRODUCT_SUCCESS } from "./actionType"
import axios from "axios";

export const menProducts=(obj,page)=>(dispatch)=>{
    console.log(obj,page,'5')
    dispatch({type:PRODUCT_REQ})
    axios.get(`http://localhost:8000/men/${page}`,obj)
    .then((res)=>{
       console.log(res.data,'8 product action')
       const {products} = res.data
       const {totalPages} = res.data
        dispatch({type:PRODUCT_SUCCESS,payload:{products,totalPages}})
    })
    .catch((err)=>{
        console.log(err.message)
        dispatch({type:PRODUCT_FAIL})
    })
}

