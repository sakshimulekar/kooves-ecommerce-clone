import { PRODUCT_FAIL, PRODUCT_REQ, PRODUCT_SUCCESS } from "./actionType"
import axios from "axios";

export const menProducts=()=>(dispatch)=>{
    dispatch({type:PRODUCT_REQ})
    axios.get("http://localhost:8000/men")
    .then((res)=>{
        //console.log(res.data.product)
        dispatch({type:PRODUCT_SUCCESS,payload:res.data.product})
    })
    .catch((err)=>{
        console.log(err)
        dispatch({type:PRODUCT_FAIL})
    })
}

