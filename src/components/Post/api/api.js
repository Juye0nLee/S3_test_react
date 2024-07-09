import axios from "axios";
import { baseUrl } from "../../../shared/config";

export const postImg = (formData)=>{
    axios({
        baseURL : baseUrl,
        url : '/post',
        method : 'POST',
        data : formData,
        headers: {
            'Content-Type' : 'multipart/form-data',
        },
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error =>{
        console.error(error);
    })
}

export const getImg = (setArrImg, setTitle, setContent) => {
    axios({
        baseURL : baseUrl,
        url : `/post?postId=7`,
        method : 'GET',
    })
    .then(response => {
        setArrImg(response.data.data.imageUrl)
        setTitle(response.data.data.title)
        setContent(response.data.data.content)
        console.log(response.data)
        
    })
    .catch(error =>{
        console.error(error);
    })
}

