/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { Reset } from "styled-reset";
import MainLayout from "./components/MainLayout/MainLayout";
import { GSCommon } from "./styles/common";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Apage from "./pages/Apage/Apage";
import Bpage from "./pages/Bpage/Bpage";
import { useState } from "react";
import Cpage from "./pages/Cpage/Cpage";
import Principal from "./components/Principal/Principal";

function App(props) {
  // const student = {
  //   code: 20230801,
  //   name: "이동헌"
  // }
  // const { code } = student; 
  // const name = "이동헌";
  // const jsx = <>
  //               <div>{code}</div>
  //               <div>{name}</div>
  //               <div>{props.age}</div>
  //             </>;

  const SHeader = css`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const SContainer = css`
    margin: 0px auto; // 자동 가운데 정렬
    width: 1170px;
    background-color: #bbb;
  `;

  const [ Header, setHeader ] = useState("Header");


  return (
    // jsx
    <>
      <Reset />
      <Global styles={GSCommon}/>
        <div>
          <div css={SHeader}>{Header}
            {/* <Link to={"/a"}>Apage</Link>
            <Link to={"/b"}>Bpage</Link>
            <Link to={"/c"}>Cpage</Link> */}
          </div>
          <div css={SContainer}>
              <Routes>
                <Route path="/a" element={<Apage />}/>
                <Route path="/b" element={<Bpage setHeader={setHeader}/>}/>
                <Route path="/c" element={<Cpage />}/>
                <Route path="/principal" element={<Principal />}/>
              </Routes>
          </div>
        </div>
      </>
      );
}

export default App;
