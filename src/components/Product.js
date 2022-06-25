import React from 'react'
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  img {
    width: 100%;
    height: auto;

  ::hover{
    cursor:pointer;
  }
}
`;

const Product = ({ img, title = "" }) => {
    return (
      <Item onClick={()=>console.log('h')}>
        <img src={img} alt={title} />
        <h2>{title}</h2>
      </Item>
    );
  };

export default Product