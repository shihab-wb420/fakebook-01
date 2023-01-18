import {Heading,HeadingTitle} from "./Heading.style.js"

  
//###Documentation❤️
/*
m=margin,
pd=padding,
brr=border-radius,
box-sh=box-shadow,
fs=font-size,
bg=background,
color=font color,
fw=font-weight,
w=width,
h=height,
d=display,
*/
  
export const HeadingContainer=({children,...others})=>{
  
  return(
      <Heading
        {...others}
        >
         {children}
      </Heading>
    )
}

export const Title=({children,...others})=>{
  
  return(
      <HeadingTitle
        {...others}
        >
         {children}
      </HeadingTitle>
    )
}

