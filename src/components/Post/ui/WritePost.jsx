import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import noImg from '../../../assets/no_image.png';
import { getImg, postImg } from '../api/api';

import StandardInput from '../../../shared/ui/StandardInput';
import StandardButton from '../../../shared/ui/StandardButton/StandardButton';
import Card from '../../../shared/ui/Card/Card';
import Slider from '../../../shared/ui/Slider/Slider';

export const WritePost = () => {
    const [isInputClick, setInputClick] = useState(false);
    const inputRef = useRef(null);
    const [imgSrc, setImgSrc] = useState('');
    const [selectedFile, setSelectedFile] = useState([]); //선택된 파일들 담는 변수 배열로 바꿈 
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [arrImg, setArrImg] = useState([noImg]);

    const ImageClick = () => {
        inputRef.current.click();
    };

    const onUploadImage = (e) => {
        const files = Array.from(e.target.files); //배열에 담아줌 
        setSelectedFile(files); //선택된 파일들을 담는 배열 
        const updatedArrImg = [...arrImg];

        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = (event) => {
                updatedArrImg.push(event.target.result);
                setArrImg([...updatedArrImg]);
            };
            reader.readAsDataURL(file);
        });
    };

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onUploadImageButtonClick = (e) => {
        if (!inputRef.current) {
            return;
        }

        const formData = new FormData();
        formData.append('id', 1);
        formData.append('title', title);
        formData.append('content', content);
 
        //selectedFile이 null이 아닌지 확인 후 파일을 FormData에 추가 
        if (selectedFile && selectedFile.length > 0) {
            selectedFile.forEach(file => {
                formData.append('postImgPath', file);
            });
        } else {
            console.error('No files selected');
        }

        console.log(formData);
        postImg(formData);
    };

    useEffect(() => {
        getImg(setArrImg, setTitle, setContent);
    }, []);

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
                                value={title}
                            />
                        </div>

                        {/* 한줄 소개 */}
                        <div style={{ width: '100%', height: '10vh', marginBottom: '20px' }}>
                            <StandardInput
                                placeholder='한줄 소개'
                                onChange={onChangeContent}
                                value={content}
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
                                multiple
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
                                <StandardButton onClick={onUploadImageButtonClick} title='저장하기' titleConfirmed='저장하시겠습니까?' backgroundColor='black' fontSize='18px' />
                            </div>
                        </div>
                    </>
                )} />
            </div>
        </Wrap>
    );
};

const Wrap = styled.div`
    display : flex;
    //border : 1px solid red;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`;

const StyledInput = styled.input`
position: absolute;
top: 300px;
left: 100px;
//visibility: hidden;
`;

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: 'pointer';
`;
