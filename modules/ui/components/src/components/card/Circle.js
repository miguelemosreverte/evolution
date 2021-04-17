import React, { useRef, useEffect } from "react";
import styled, { css, transform } from 'styled-components'


const CircleElement = styled.div`
  ${({itemCount, circleSize, itemSize, index, rot}) => {
    return css`
    

    display: block;
    position: absolute;
    top:  0%; 
    left: 50%;
    width:  ${itemSize};
    height: 100vh;
    margin: -(${itemSize} / 2);

        transform: 
        rotate(${rot + 90}deg) 
        translate(${circleSize}) 
        rotate(+${rot*0.1 + 90}deg);
           
  `
}}
`

const Circle = styled.div`
  ${({radius}) => {
    return css`
        position: relative;
        width:  ${radius}wh;
        height: ${radius}vh;
        padding: 0;
        border-radius: 50%; 
        list-style: none;   
  `
  }}
`




export default class CircleComponent extends React.Component{

    render() {

    const itemCount=this.props.children.length
    const radius = this.props.radius || `${1 * itemCount}vh`
    const itemSize = Math.max(15, 45 - itemCount * 4)


     return (
        <Circle         
            radius="90"
        >
            {this.props.children.map((e,i) => 
            <CircleElement
            itemCount={this.props.children.length}
            circleSize={radius}
            itemSize={`${itemSize}em`}
            index={i}
            rot={(360 / (itemCount * 1.1)) * i}
            >
            {e}
            </CircleElement>)} 
            
      </Circle>
        
     )}

}