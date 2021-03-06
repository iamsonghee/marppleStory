import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setColor, setTxtColor } from "../store/actions";

function Pallete(props) {
  const dispatch = useDispatch();
  const [clickedId, setClickedId] = useState("FFFFFF");
  const [colorName, setColorName] = useState("새하얀");

  const handleOnclick = (e, item) => {
    setColorName(e.target.getAttribute("name"));

    if (props.btnId === 1) {
      dispatch(setColor(item.id));
    } else if (props.btnId === 3) {
      dispatch(setTxtColor(item.id));
    }
    setClickedId(item.id);
  };

  return (
    <PalleteContainer>
      <SelColor>
        <span>색상-</span>
        <span>{colorName}</span>
      </SelColor>

      {colors.map((item) => {
        const divStyle = { backgroundColor: item.color };
        return (
          <Color
            key={item.id}
            id={item.id}
            style={divStyle}
            name={item.colorName}
            onClick={(e) => handleOnclick(e, item)}
            className={clickedId === item.id && "on"}
          />
        );
      })}
    </PalleteContainer>
  );
}

export default Pallete;

const PalleteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0px;
`;

const SelColor = styled.div`
  box-sizing: border-box;
  padding: 8px 0px;
  width: 100%;
`;
const Color = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  margin-bottom: 8px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: tomato;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.shadow};
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  &.on {
    border: 2px solid white;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 1);
  }
`;

const colors = [
  { id: "000000", color: "#000000", colorName: "시커먼" },
  { id: "FFFFFF", color: "#FFFFFF", colorName: "새하얀" },
  { id: "28327b", color: "#28327b", colorName: "어두운바다" },
  { id: "135f6e", color: "#135f6e", colorName: "청록" },
  { id: "ffcb31", color: "#ffcb31", colorName: "골드옐로우" },
  { id: "f47920", color: "#f47920", colorName: "밝은주황" },
  { id: "ecaccd", color: "#ecaccd", colorName: "인디안핑크" },
  { id: "f4c3c6", color: "#f4c3c6", colorName: "연분홍" },
  { id: "cc722c", color: "#cc722c", colorName: "밝은갈색" },
  { id: "224628", color: "#224628", colorName: "쑥색" },
  { id: "da2028", color: "#da2028", colorName: "정열레드" },
];
