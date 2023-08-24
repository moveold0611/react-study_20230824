/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React, { useEffect, useState } from 'react';
import MainLayout from "../../components/MainLayout/MainLayout";

function Apage(props) {
    const menus = [
        {
            id: 1,
            name: "나의 프로젝트"
        },
        {
            id: 2,
            name: "나에게 공유된 프로젝트"
        }
    ]

    const [ result,  setResult ] = useState("기본상태");
    const [ inputValueObjs, setInputValueObjs ] = useState({
        firstNum: 0,
        secondNum: 0
    });

    const [name, setName] = useState();

    useEffect(()=>{
        calc(inputValueObjs.firstNum, inputValueObjs.secondNum);
        // calc(10, 20)
    }, [name]);

    const calc = (x, y) => {
        setResult(x + y);
    };

    const handleInputChange = (e) => {
        setInputValueObjs({
            ...inputValueObjs,
            [e.target.name]: parseInt(e.target.value)
        });
    };

    const handleNameInputChange = (e) => {
        setName(e.target.value);
    }
    

    return (
        <MainLayout title={"Apage"} menus={menus}>
            <div>
                {result}
            </div>
            <div>
                <input type="text" name="firstNum" placeholder="1번 값" onChange={handleInputChange}/>
                <input type="text" name="secondNum" placeholder="2번 값" onChange={handleInputChange}/>
                <input type="text" name="name" placeholder="이름" onChange={handleNameInputChange}/>
            </div>
        </MainLayout>                    
    );
}

export default Apage;