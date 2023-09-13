import { toast } from 'react-toastify';
import { PRODUCT_FAIL, PRODUCT_REQ, PRODUCT_SUCCESS, SEARCH_FAILURE, SEARCH_REQ, SEARCH_SUCCESS } from "./actionType"
import axios from "axios";

export const menProducts=(obj,page)=>(dispatch)=>{
    console.log(obj,page,'5')
    dispatch({type:PRODUCT_REQ})
    axios.get(`http://localhost:8000/men/${page}`,obj)
    .then((res)=>{
       console.log(res,'8 product action')
       const {products} = res.data
       const {totalPages} = res.data
        dispatch({type:PRODUCT_SUCCESS,payload:{products,totalPages}})
    })
    .catch((err)=>{
        console.log(err.message)
        dispatch({type:PRODUCT_FAIL})
    })
}

export const handleSearch =(searchQuery)=> async (dispach) => {
    console.log(searchQuery,'21')
    try {
        dispach({type:SEARCH_REQ})
        const res = await axios.get(`http://localhost:8000/men/api/search?query=${searchQuery}`)
        console.log(res,' : 26 action')
        const data = await res.data.results
        console.log(data,'25 ')
        // if(data.length===0){
        //     toast('no result found')
        // }
        
        dispach({type:SEARCH_SUCCESS,payload:data})
    } catch (error) {
        console.log(error.message)
        dispach({type:SEARCH_FAILURE})
    }
  };
  