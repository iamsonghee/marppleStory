import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { FaBold, FaItalic, FaUnderline, FaStrikethrough } from "react-icons/fa";
import {
  setBImage,
  setFont,
  setModalWin,
  setText,
  setFontSize,
} from "../store/actions";
import { useDispatch, useSelector } from "react-redux";

import Pallete from "../Components/Pallete";

function Options(props) {
  const [fontDeco, setFontDeco] = useState({ id: 0, isClicked: false });
  // const [imgFile, setimgFile] = useState({ file: null, prevURL: null });

  const fontStore = useSelector((store) => store.fontReducer);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFont(e.target.value));
  };

  const handleTxtChange = (e) => {
    dispatch(setText(e.target.value));
  };

  const fnClickFontDeco = (e) => {
    setFontDeco({ id: parseInt(e.target.id), isClicked: true });
  };

  const fnClickAddCart = () => {
    dispatch(setModalWin(true));
  };
  const handleFileOnChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      dispatch(setBImage(reader.result));
    };
  };

  const handleFontSizeChange = (e) => {
    dispatch(setFontSize(e.target.value));
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
          <Pallete btnId={props.clickedBtnId} />
        </ColorOption>
      )}
      {props.clickedBtnId === 2 && (
        <div>
          <input
            type="file"
            accept="image/jpg,impge/png,image/jpeg,image/gif"
            onChange={handleFileOnChange}
          ></input>
        </div>
      )}

      {props.clickedBtnId === 3 && (
        <TextOption>
          <FontStyle>
            <SelectWrap>
              <div className="label">서체선택</div>
              <select onChange={handleChange}>
                <option value="Verdana">Verdana</option>
                <option value="cursive">cursive</option>
                <option value="Arial">Arial</option>
              </select>
            </SelectWrap>
            <FontDeco>
              {fontDecoArr.map((item, idx) => {
                return (
                  <div
                    id={item.id}
                    key={idx}
                    onClick={fnClickFontDeco}
                    className={
                      (item.id === fontDeco.id) &
                        (fontDeco.isClicked === true) && "on"
                    }
                  >
                    {item.icon}
                  </div>
                );
              })}
            </FontDeco>
          </FontStyle>
          <TextInput>
            <div>
              <div className="label">텍스트</div>
              <input
                type="text"
                placeholder="입력하세요 (12글자 내)"
                onChange={handleTxtChange}
                maxLength="12"
                value={fontStore.text}
              />
            </div>
            <TextSize>
              <div className="label">글자크기</div>
              <input
                type="number"
                name="userPhoneNumber"
                min="0"
                value={fontStore.size}
                onChange={handleFontSizeChange}
              />
            </TextSize>
          </TextInput>
          <Pallete btnId={props.clickedBtnId} />
        </TextOption>
      )}
      <OrderButton onClick={fnClickAddCart}>장바구니 담기</OrderButton>
    </OptionContainer>
  );
}

export default Options;

const OptionContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 30%;
  padding: 40px;
  .label {
    padding: 10px 0px 5px 0px;
  }
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

const TextOption = styled.div`
  display: flex;
  flex-direction: column;
`;
const FontStyle = styled.div``;
const FontDeco = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  width: 140px;
  margin: 8px 0px;
  padding: 0px 10px;
  div {
    &.on {
      color: #f3c3c6;
    }
    padding: 10px;
    cursor: pointer;
    :hover {
      svg {
        color: #f3c3c6;
      }
    }
  }
`;
const SelectWrap = styled.div`
  select {
    display: flex;
    border: 1px solid grey;
    width: 100%;
    padding: 8px;
  }
`;

const TextInput = styled.div`
  padding: 10px 0px;
  input {
    display: flex;
    width: 100%;
    padding: 10px 5px;
    border: 1px solid black;
  }
`;
const TextSize = styled.div`
  width: 60px;
  input {
    padding: 10px 5px;
    text-align: right;
  }
`;

const OrderButton = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 100%;
  padding: 15px;
  background-color: black;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  color: white;
  cursor: pointer;
`;

const fontDecoArr = [
  { id: 1, icon: <FaBold />, value: "bold" },
  { id: 2, icon: <FaItalic />, value: "italic" },
  { id: 3, icon: <FaUnderline />, value: "underline" },
  { id: 4, icon: <FaStrikethrough />, value: "throungline" },
];
