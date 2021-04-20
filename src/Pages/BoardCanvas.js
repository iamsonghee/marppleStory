import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DecoButton from "../Components/DecoButton";

import { BsUpload } from "react-icons/bs";
import { MdTextFields } from "react-icons/md";
import { SiAdobephonegap } from "react-icons/si";
import { BiSticker } from "react-icons/bi";

function BoardCanvas(props) {
  const [color, setColor] = useState();
  const [button, setButton] = useState(0);

  const canvas1 = useRef();
  const canvas2 = useRef();

  let context1, context2;
  useEffect(() => {
    console.log("props.seleTxtColor : ", props.seleTxtColor);
    setColor(props.selColor);
    context1 = canvas1.current.getContext("2d");
    context2 = canvas2.current.getContext("2d");
    const imgSrc = "/images/phone_white.png";
    const imgSrc_cover = "/images/phone_cover.png";

    const loadImage = (callback) => {
      const img = new Image();
      const imgCover = new Image();
      img.src = imgSrc;
      imgCover.src = imgSrc_cover;
      img.addEventListener("load", () => {
        fnDrawImage(img, canvas1, context1);
        fnDrawImage(imgCover, canvas2, context2);
        callback();
      });
    };

    loadImage(handleClickColor);
  });

  const handleClickColor = () => {
    let rgbArr = hexToRgb(props.selColor);
    console.log(rgbArr);

    const imgData = context2.getImageData(0, 0, 860, 860);
    for (let i = 0; i < imgData.data.length; i += 4) {
      if (imgData.data[i + 3] !== 0) {
        imgData.data[i] = rgbArr[0];
        imgData.data[i + 1] = rgbArr[1];
        imgData.data[i + 2] = rgbArr[2];
        imgData.data[i + 3] = imgData.data[i + 3];
      }
    }
    context2.putImageData(imgData, 0, 0);
    fnDrawText(props.seleTxtColor);
  };

  function hexToRgb(hex) {
    /* rgb로 각각 분리해서 배열에 담기. */
    var rgb =
      3 === hex.length ? hex.match(/[a-f\d]/gi) : hex.match(/[a-f\d]{2}/gi);
    rgb.forEach(function (str, x, arr) {
      /* rgb 각각의 헥사값이 한자리일 경우, 두자리로 변경하기. */
      if (str.length === 1) str = str + str;

      /* 10진수로 변환하기. */
      arr[x] = parseInt(str, 16);
    });

    return rgb;
  }

  const fnDrawImage = (img, canvas, context) => {
    canvas.current.height = img.height;
    canvas.current.width = img.width;
    context.drawImage(img, 0, 0, img.width, img.height);
  };

  const fnDrawText = (color) => {
    context2.fillStyle = "#" + color;
    context2.font = "40pt cursive";
    context2.fillText("I am songhee", 280, 500);
  };

  return (
    <CanvasContainer>
      <CanvasWrap>
        <Canvas ref={canvas1} height="860px" width="860px" />
        <Canvas ref={canvas2} height="860px" width="860px" />
      </CanvasWrap>
      <DecoButtons>
        {Buttons.map((button) => (
          <DecoButton
            key={button.id}
            id={button.id}
            iconImg={button.iconImg}
            name={button.name}
          />
        ))}
      </DecoButtons>
    </CanvasContainer>
  );
}

export default BoardCanvas;

const CanvasContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f8f9fa;
`;
const CanvasWrap = styled.div`
  width: 550px;
  height: 550px;
  position: relative;
`;
const DecoButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 80px;
  width: 50px;
  height: 100%;
`;
const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Buttons = [
  { id: 1, iconImg: <SiAdobephonegap />, name: "상품변경" },
  { id: 2, iconImg: <BsUpload />, name: "이미지업로드" },
  { id: 3, iconImg: <MdTextFields />, name: "텍스트" },
  { id: 4, iconImg: <BiSticker />, name: "스티커" },
];
