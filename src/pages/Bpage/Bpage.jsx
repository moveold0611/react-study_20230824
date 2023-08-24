/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React, { useRef, useState } from 'react';
import MainLayout from "../../components/MainLayout/MainLayout";

function Bpage({ setHeader }) {
    const menus = [
        {
            id: 1,
            name: "나의 계정 정보"
        },
        {
            id: 2,
            name: "비밀번호 변경"
        },
        {
            id: 3,
            name: "이메일 인증 또는 변경"
        },
        {
            id: 4,
            name: "계정 업그레이드"
        }
    ]

    const [ content , setContent ] = useState("기본값");
    let inputText = ""
    // const inputRef = useRef();

    const handleInputChange = (e) => {
        inputText = e.target.value;
    };

    const handleOkClick = () => {
        alert("확인 클릭")
        setContent(inputText);
        setHeader(inputText);
    };


    return (
        <MainLayout title={"Bpage"} menus={menus}>
            <div>
                <h1>{content}</h1>
                <input type="text" onChange={handleInputChange}/>
                <button onClick={handleOkClick}>확인</button>
            </div>
        </MainLayout>  
    );
}

export default Bpage;   