import React, { useEffect, useState } from "react";
import { CgPacman } from "react-icons/cg";
import styled from "styled-components";
function Options() {
  const [color, setColor] = useState();

  const selectColor = (e) => {
    setColor(e.target.id);
  };

  useEffect(() => {
    console.log(color);
  }, [color]);

  return (
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
          {colors.map((item) => {
            const divStyle = { "background-color": item.color };
            return (
              <Color id={item.id} style={divStyle} onClick={selectColor} />
            );
          })}
        </Pallete>
      </ColorOption>
    </OptionContainer>
  );
}

export default Options;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
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
  border: 1px solid lightgrey;
  padding: 5px;
  box-shadow: ${(props) => props.theme.shadow};
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

const SelColor = styled.div`
  padding: 10px 0px;
`;

const Pallete = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0px;
`;

const Color = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  margin-bottom: 8px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: tomato;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.shadow};
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const colors = [
  { id: "000000", color: "#000000" },
  { id: "FFFFFF", color: "#FFFFFF" },
  { id: "28327b", color: "#28327b" },
  { id: "135f6e", color: "#135f6e" },
  { id: "ffcb31", color: "#ffcb31" },
  { id: "f47920", color: "#f47920" },
  { id: "ecaccd", color: "#ecaccd" },
  { id: "f4c3c6", color: "#f4c3c6" },
  { id: "cc722c", color: "#cc722c" },
  { id: "224628", color: "#224628" },
  { id: "da2028", color: "#da2028" },
];
