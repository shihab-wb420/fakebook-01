import Styled from "styled-components"


export const Heading = Styled.div`
  width:${({w})=>w?w:"100%"};
  height:${({h})=>h?h:"auto"};
  padding:${({pd})=>pd?pd:"3px"};
  margin:${({m})=>m?m:"0px"};
  position:sticky;
  top:2.65em;
 /* border:${({br})=>br?br:"1px solid red"}; */
  color:${props=>props.color?props.color:"var(--text-light)"};
  background:${props=>props.bg?props.bg:"var(--fb-bgColor)"};
  display:${props=>props.d?props.d:"flex"};
  flex-direction:${({flexDirection})=>flexDirection?flexDirection:"row"};
  font-size:${props=>props.fs?props.fs:"15px"};
  font-weight:${props=>props.fw?props.fw:"500"};
  border-bottom:0.1px solid var(--light-gray);
  
  .rightSide_wrapper{
    text-align:center;
    display:flex;
    align-items:center;
    padding:0em 1em;
    
    img{
      width:1.8em;
      height:1.8em;
      padding:3px;
      margin:0px 5px;
      border-radius:50%;
      filter:var(--svg-light);
      :hover{
        background:var(--light-gray);
      }
    }
  }
`

export const HeadingTitle=Styled.h2`
  padding:${({pd})=>pd?pd:"3px"};
  margin:${({m})=>m?m:"0px"};
  flex:1;
  color:${props=>props.color?props.color:""};
  border:${({br})=>br?br:""};
  background:${props=>props.bg?props.bg:""};
  display:${props=>props.d?props.d:""};
  font-size:${props=>props.fs?props.fs:""};
  font-weight:${props=>props.fw?props.fw:""};
`