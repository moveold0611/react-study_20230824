/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';

function MainLayout({ title, menus, children }) {
    // const testMenus = [ 1, 2, 3, 4 ];
    // const testMenuMap = testMenus.map((menu)=>{
    //     <li>
    //         {menu}
    //     </li>
    // });

    return (
        <>
          <h1>{title}</h1>
            <div css={S.SMainContainer}>
              <ul css={S.SSidebar}>
                {menus.map((menu)=>
                    <li key={menu.id} >
                        {menu.name}
                    </li>
                )}
              </ul>
              <div css={S.SContentContainer}>
                    {children}
               </div>
            </div>
        </>
    );
}

export default MainLayout;