import { PRODUCT_FAIL, PRODUCT_REQ, PRODUCT_SUCCESS } from "./actionType"
import axios from "axios";

export const menProducts=(obj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQ})
    axios.get("http://localhost:8000/men",obj)
    .then((res)=>{
        console.log(res.data)
        dispatch({type:PRODUCT_SUCCESS,payload:res.data.product})
    })
    .catch((err)=>{
        console.log(err)
        dispatch({type:PRODUCT_FAIL})
    })
}

