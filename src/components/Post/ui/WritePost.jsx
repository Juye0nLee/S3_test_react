import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import noImg from '../../../assets/no_image.png'
import { getImg, postImg } from '../api/api';

import StandardInput from '../../../shared/ui/StandardInput';
import StandardButton from '../../../shared/ui/StandardButton/StandardButton';
import Card from '../../../shared/ui/Card/Card';
import Slider from '../../../shared/ui/Slider/Slider';

export const WritePost = () => {
    const [isInputClick, setInputClick] = useState(false);
    const inputRef = useRef(null);
    const [imgSrc, setImgSrc] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [arrImg, setArrImg] = useState([noImg])

    const ImageClick = () => {
        inputRef.current.click();
    }

    const onUploadImage = (e) => {
        const imgFile = e.target.files[0];
        if (imgFile) {
            setArrImg([...arrImg, e]);
            const reader = new FileReader();
            reader.onload = (e) => {
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
        Array.from(e).forEach(file => {
            formData.append('id', 1);
            formData.append('title', title);
            formData.append('content', content);
            formData.append('postImgPath', selectedFile);
        });
        console.log(formData)
        postImg(formData)
    }

    useEffect(() => {
        getImg(setImgSrc, setTitle, setContent)
    }, [])

    return (
        <Wrap>

            <h1>주랭이의 S3 테스트</h1>

            <div style={{ width: '50%', height: '100%', padding: '20px 20px 20px 20px' }}>
                <Card content={(

                    <>

                        {/* 제목 */}
                        <div style={{ width: '100%', height: '100px', marginBottom: '20px' }}>
                            <StandardInput
                                placeholder='제목을 입력해주세요'
                                onChange={onChangeTitle}
                            />
                        </div>

                        {/* 한줄 소개 */}
                        <div style={{ width: '100%', height: '10vh', marginBottom: '20px' }}>
                            <StandardInput
                                placeholder='한줄 소개'
                                onChange={onChangeTitle}
                            />
                        </div>

                        {/* 다중 이미지 슬라이더 */}
                        <div style={{ marginLeft: '40px', marginRight: '40px', position: 'relative' }}>

                            <Slider arrImg={arrImg} />

                            {/* 파일 선택하기 버튼 (display: none)*/}
                            <StyledInput type='file'
                                accept='image/*'
                                ref={inputRef}
                                onChange={onUploadImage}
                            />

                        </div>

                        {/* 저장하기 버튼 */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <div style={{
                                width: '30%',
                                height: '65px',
                                marginTop: '40px',

                            }}>
                                < StandardButton onClick={onUploadImageButtonClick} title='저장하기' titleConfirmed='저장하시겠습니까?' backgroundColor='black' fontSize='18px' />
                            </div>
                        </div>

                    </>
                )} />
            </div>


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
        width: 51.1%;
    height: 100%; /* 높이를 원하는 크기로 설정 */
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
position: absolute;
top: 300px;
left: 100px;
visibility: hidden;
`;

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: 'pointer';

`;