import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import noImg from '../assets/no_image.png'

const baseUrl = 'http://localhost:8080/api' 

const ImgStyled = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    cursor: 'pointer';
`;
function Home() {
    const inputRef = useRef(null);
    const [imgSrc,setImgSrc] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const ImageClick = () =>{
        inputRef.current.click();
    }

    const onUploadImage = (e) => {
        const imgFile = e.target.files[0];
        if (imgFile) {
            setSelectedFile(imgFile);
            const reader = new FileReader();
            reader.onload = (e) =>{
                setImgSrc(e.target.result);
            };
            reader.readAsDataURL(imgFile);
        }
        console.log(imgFile.name);
    }

    const onUploadImageButtonClick = (e) => {
        if (!inputRef.current) {
            return;
        }
        const formData = new FormData();
        formData.append('id', 1);
        formData.append('title', "11시36분 이미지 업로드");
        formData.append('content', "내용 11시36분");
        formData.append('postImgPath', selectedFile);
            
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


    return (
        <div>
            <input type='file'
                accept='image/*'
                ref={inputRef}
                onChange={onUploadImage}
                style={{display : 'none'}}
            />
            l<ImgStyled
                src={imgSrc ?? noImg}
                alt="이미지"
                onClick={ImageClick}
            />
            <button onClick={onUploadImageButtonClick}>
                이미지 업로드
            </button>
        </div>
    );
};

export default Home;
