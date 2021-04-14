import React from "react";
import styled from "styled-components";
function Options() {
  return (
    <>
      <OptionContainer>
        <ProductInfo>
          <Title>갤럭시 S21 울트라 범퍼 슬라이드 케이스 (무광)</Title>
          <Price>18,900원</Price>
          <BtnSquare>상품변경</BtnSquare>
        </ProductInfo>
        <ColorOption>
          <SelColor>
            <span>색상-</span>
            <span>화이트</span>
          </SelColor>
          <Pallete>
            {[0, 1, 2, 3].map((item) => {
              return <div>{item}</div>;
            })}
          </Pallete>
        </ColorOption>
      </OptionContainer>
    </>
  );
}

export default Options;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

const ProductInfo = styled.div`
  padding-bottom: 40px;
`;

const Title = styled.div`
  font-size: 20px;
  letter-spacing: -0.8px;
`;

const Price = styled.div`
  font-size: 18px;
  padding: 20px 0px;
`;

const BtnSquare = styled.button`
  all: unset;
  border: 1px solid grey;
  padding: 5px;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
`;

const ColorOption = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelColor = styled.div``;

const Pallete = styled.div`
  display: flex;
  padding: 10px 0px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: tomato;
    cursor: pointer;
    /* border: 2px solid black; */
  }
`;
