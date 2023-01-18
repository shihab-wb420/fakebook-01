import {ButtonStyle} from "./Button.style.js"

export const Button =({children,...others})=>{
  
  return(
      <ButtonStyle {...others}>
        {children}
      </ButtonStyle>
    )
}