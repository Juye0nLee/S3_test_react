import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { baseUrl } from '../../../shared/config' 
import noImg from '../../../assets/no_image.png'
import { getImg, postImg } from '../api/api';

export const WritePost = () => {
    const [isInputClick, setInputClick] = useState(false);
    const inputRef = useRef(null);
    const [imgSrc,setImgSrc] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [title,setTitle] = useState();
    const [content,setContent] = useState();

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

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeContent = (e) => {
        setContent(e.target.value)
    }

    const onUploadImageButtonClick = (e) => {
        if (!inputRef.current) {
            return;
        }
        const formData = new FormData();
        formData.append('id', 1);
        formData.append('title', title);
        formData.append('content', content);
        formData.append('postImgPath', selectedFile);
        console.log(formData)
        postImg(formData)
    }

    useEffect(()=>{
        getImg(setImgSrc, setTitle, setContent)
    }, [])

    return (
        <Wrap>
            <StyledTitleTextarea
                placeholder='제목을 입력해주세요'
                onChange={onChangeTitle}
            />
            <StyledContentTextarea
                placeholder='내용을 입력해주세요'
                onChange={onChangeContent}
            />
            <StyledImg
                src={imgSrc == '' ? noImg: imgSrc}
                alt="이미지"
            />
            <StyledInput type='file'
                accept='image/*'
                ref={inputRef}
                onChange={onUploadImage}
            />

            <button onClick={onUploadImageButtonClick}>
                저장하기 
            </button>
        </Wrap>
    )
}

const Wrap = styled.div`
    display : flex;
    //border : 1px solid red;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`;
const StyledTitleTextarea = styled.textarea`
    font-family: 'Pretendard';
    resize: none;
    width: 51.1%;
    height: 100%; /* 높이를 원하는 크기로 설정 */
    padding : 1% 0 0 1%;
    box-sizing: border-box;
    &::placeholder {
        font-weight: 700;
        color: #000;
    }
    &:focus {
        outline: none;
    }
    &:focus::placeholder{
        color : transparent;
    }

    box-shadow: 1px 2px 8px #f3f3f3;
    border-radius : 5px;
    border : none;


`;

const StyledContentTextarea = styled.textarea`
    font-family: 'Pretendard';
    padding : 1% 0 0 1%;
    resize : none;
    width : 50%;
    height : 80vh;
    &::placeholder {
        font-weight: 700;
        color: #000;
    }
    &:focus {
        outline: none;
    }
    &:focus::placeholder{
        color : transparent;
    }
    box-shadow: 1px 2px 8px #f3f3f3;
    border-radius : 5px;
    border : none;
`;

const StyledInput = styled.input`

`;

const StyledImg = styled.img`
    position : absolute;
    //display : none;
    width: 150px;
    height: 150px;
    object-fit: cover;
    cursor: 'pointer';

`;