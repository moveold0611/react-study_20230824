import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import P3 from '../P3/P3';

function P2({ num, setNum }) {
    return (
        <div css={S.SContainer}>
             <P3 num={num} setNum={setNum}/>
        </div>
    );
}

export default P2;