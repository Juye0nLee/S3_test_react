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

export const getImg = (setImgSrc, setTitle, setContent) => {
    axios({
        baseURL : baseUrl,
        url : `/post?postId=11`,
        method : 'GET',
    })
    .then(response => {
        setImgSrc(response.data.data.imageUrl)
        setTitle(response.data.data.title)
        setContent(response.data.data.content)
    })
    .catch(error =>{
        console.error(error);
    })
}

