import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import P1 from './P1/P1';
import { useRecoilState } from 'recoil';
import { principalState } from '../../store/principalStore';

function Principal(props) {
    const [ principal, setPrincipal ] = useRecoilState(principalState);
    const [ num, setNum ] = useState(0);

    useEffect(() => {
        setPrincipal({
            userId: 1,
            username: "abcdef",
            name: "이동헌",
            email: "moveold0611@git",
            phone: "010-2084-2835"
        })
    }, []);

    return (
        <div css={S.SContainer}>
            <h1>{num}</h1>
            <P1 num={num} setNum={setNum}/>
        </div>
    );
}

export default Principal;