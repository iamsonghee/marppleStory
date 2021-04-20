import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pallete from "../Components/Pallete";
import { Store } from "./PhoneMaker";

function Options(props) {
  const [color, setColor] = useState({ code: "FFFFFF", name: "새하얀" });
  const [txtcolor, setTxtColor] = useState({ code: "FFFFFF", name: "시커먼" });

  const selectColor = (e) => {
    setColor({ code: e.target.id, name: e.target.getAttribute("name") });
  };
  const selectTxtColor = (e) => {
    setTxtColor({ code: e.target.id, name: e.target.getAttribute("name") });
  };
  return (
    <OptionContainer>
      <ProductInfo>
        <Title>갤럭시 S21 울트라 범퍼 슬라이드 케이스 (무광)</Title>
        <Price>18,900원</Price>
        <BtnSquare>상품변경</BtnSquare>
      </ProductInfo>

      {props.clickedBtnId === 1 && (
        <ColorOption>
          <SelColor>
            <span>색상-</span>
            <span>{color.name}</span>
          </SelColor>
          <Pallete selectColor={selectColor} />
          <Store.Consumer>
            {(fn_setColor) => fn_setColor[0](color.code)}
          </Store.Consumer>
        </ColorOption>
      )}
      {props.clickedBtnId === 3 && (
        <TextOption>
          <SelColor>
            <span>서체선택</span>
            <div className="selectWrap">
              <select>
                <option value="Verdana">Verdana</option>
                <option value="cursive">cursive</option>
                <option value="Arial">Arial</option>
              </select>
            </div>
          </SelColor>
          <SelColor>
            <span>글자색상-</span>
            <span>{color.name}</span>
          </SelColor>
          <Pallete selectColor={selectTxtColor} />
          <Store.Consumer>
            {(fn_setColor) => fn_setColor[1](txtcolor.code)}
          </Store.Consumer>
        </TextOption>
      )}
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
  box-sizing: border-box;
  padding: 8px 0px;
  width: 100%;
  .selectWrap {
    padding: 8px;
  }
  select {
    display: flex;
    border: 1px solid grey;
    width: 100%;
    padding: 8px;
  }
`;

const TextOption = styled.div`
  display: flex;
  flex-direction: column;
`;
