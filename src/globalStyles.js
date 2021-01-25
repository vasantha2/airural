import styled, {createGlobalStyle}from 'styled-components';
 const GlobalStyle = createGlobalStyle`
 *{
     box-sizing: border-box;
     margin:0;
     padding:0;
     font-family: 'source sans pro', sans-serif;
 }
 `;

 export const Container = styled.div`
 z-index: 1;
 width: 100%;
 max-width: 1300px;
 margin-left: auto;
 margin-right: auto;
 padding-right:50px;
 padding-left:50px;
 @media screen and (max-width: 991px) {
    padding- right: 25px;
    padding-left:25px;
}
`;


export const Button = styled.button`
border-radius: 2px;
background: ${({primary}) => (primary ? '#4B59F7' : '#0467FB') };
white-space: nowrap;
padding:${({fontBig}) => (fontBig ? '15px' : '12px')};
outline: none;
border: none;
cursor: pointer;

&:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({primary}) => (primary ? '#0467FB' : '#4B59F7')};
}
@media screen and (max-width: 960px) {
    width: 100%;
}
`;

export default GlobalStyle
