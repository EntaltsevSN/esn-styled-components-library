import React from 'react';
import styled from 'styled-components';
import { color } from '../config/Styles';

function Radio(props) {
  const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 16px 0;
  `
  const Input = styled.input`
    width: 16px;
    height: 16px;
    position: absolute;
    left: 0;
    top: calc(50% - 8px);
    margin: 0;
    z-index: 1;
    opacity: 0;
    cursor: pointer;

    & + div {
      &:after {
        opacity: 0;
      }
    }

    &:checked + div {
      &:before {
        opacity: 0;
        transform: scale(0);
      }
      &:after {
        opacity: 1;
        transform: rotate(35deg) translate(3px,-3px) scale(1);
      }
    }
  `
  const Placeholder = styled.div`
    width: 16px;
    height: 16px;
    position: absolute;
    z-index: 2;
    pointer-events: none;
    box-sizing: border-box;

    &:before,
    &:after {
      transition: all ease-out .2s;
    }

    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border: 2px solid ${color.primary.original};
      border-radius: 50%;
      box-sizing: border-box;
      transform: scale(1);
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 50%;
      height: 90%;
      top: 0;
      left: 0;
      border: 2px solid ${color.primary.hover};
      border-left-color: transparent;
      border-top-color: transparent;
      box-sizing: border-box;
      transform: rotate(35deg) translate(3px,-3px) scale(0);
    }
  `

  const Label = styled.label`
    display: inline-block;
    position: relative;
    left: 32px;
    width: 100%
  `
    
  return (
    <Wrapper>
      <Input type="radio" {...props} />
      <Placeholder />
      {(props.label !== undefined) && <Label htmlFor={props.id}>{props.label}</Label>}
    </Wrapper>
  )
}

export default Radio;