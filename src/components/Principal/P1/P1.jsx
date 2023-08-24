import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import P2 from '../P2/P2';

function P1({ num, setNum }) {
    return (
        <div css={S.SContainer}>
            <P2 num={num} setNum={setNum}/>
        </div>
    );
}

export default P1;