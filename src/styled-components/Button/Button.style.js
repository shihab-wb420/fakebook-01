import Styled from "styled-components"


export const ButtonStyle = Styled.button`
  width:${({w})=>w?w:"100%"};
  height:${({h})=>h?h:"auto"};
  font-size:${({fs})=>fs?fs:"17px"};
  font-weight:${({fw})=>fw?fw:"450"};
  border-radius:4px;
  /*display:flex;
  justify-content:center;*/
  color:${({color})=>color?color:"var(--text-light)"};
  padding:${({pd})=>pd?pd:"3px"};
  margin:${({m})=>m?`${m}`:"2px"};
  border:none;
  background:${({bg})=>bg?bg:"var(--secondaryColor)"};
  p{
    padding:3px;
    &:hover{
     background:rgba(0,0,0,0.1)
    }
  }
`