import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DecoButton from "../Components/DecoButton";

import { BsUpload } from "react-icons/bs";
import { MdTextFields } from "react-icons/md";
import { SiAdobephonegap } from "react-icons/si";
import { BiSticker } from "react-icons/bi";

import { useDispatch, useSelector } from "react-redux";
import { setFinalCover } from "../store/actions";

function BoardCanvas(props) {
  console.log("omyyyddL:", props);
  const dispatch = useDispatch();

  const colorStore = useSelector((store) => store.colorReducer);
  const fontStore = useSelector((store) => store.fontReducer);
  const modalStore = useSelector((store) => store.modalReducer);
  const bImageStore = useSelector((store) => store.bImageReducer);

  const canvasPhone = useRef(null);
  // const img = useRef(null);
  const canvasCover = useRef(null);
  const canvasFont = useRef(null);
  const canvasResult = useRef(null);

  useEffect(() => {
    const context = canvasPhone.current.getContext("2d");
    const imgSrc = "/images/phone_white.png";
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      canvasPhone.current.height = img.height;
      canvasPhone.current.width = img.width;
      context.drawImage(img, 0, 0, img.width, img.height);
    };
  }, []);

  useEffect(() => {
    if (modalStore) {
      fnPrint();
    }
  }, [modalStore]);

  useEffect(() => {
    const context = canvasCover.current.getContext("2d");

    const imgBCover = new Image();
    imgBCover.src = "/images/phone_cover.png";

    const imgCover = new Image();
    imgCover.src = bImageStore;

    imgBCover.onload = () => {
      context.drawImage(imgBCover, 0, 0);
      context.globalCompositeOperation = "source-in";
      imgCover.onload = () => {
        context.drawImage(imgCover, 0, 0, imgBCover.width, imgBCover.height);
      };
    };
  }, [bImageStore]);

  useEffect(() => {
    const context = canvasCover.current.getContext("2d");
    const imgSrc_cover = "/images/phone_cover.png";

    const imgCover = new Image();

    imgCover.src = imgSrc_cover;

    imgCover.onload = () => {
      fnDrawImage(imgCover, canvasCover, context, handleClickColor);
    };
  }, [colorStore]);

  useEffect(() => {
    const context = canvasFont.current.getContext("2d");
    context.clearRect(
      0,
      0,
      canvasFont.current.width,
      canvasFont.current.height
    );
    context.fillStyle = "#" + fontStore.txtColor;
    const fontStyle = "bold italic " + fontStore.size + "pt " + fontStore.font;
    context.font = fontStyle;
    context.fillText(fontStore.text, 280, 500);
  }, [fontStore]);

  const handleClickColor = () => {
    const context2 = canvasCover.current.getContext("2d");

    let rgbArr = hexToRgb(props.selColor);

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
    console.log(canvasCover.current.toDataURL());
    // fnDrawText(props.seleTxtColor);
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

  const fnDrawImage = (img, canvas, context, callback) => {
    console.log("fnDrawImage()", img, canvas, context);
    canvas.current.height = img.height;
    canvas.current.width = img.width;
    context.drawImage(img, 0, 0, img.width, img.height);

    callback();
  };

  const fnPrint = () => {
    const img1 = new Image();
    const img2 = new Image();

    const context3 = canvasResult.current.getContext("2d");
    const context4 = canvasCover.current.getContext("2d");

    // img1.src = canvasPhone.current.toDataURL("image/png", 0.5);
    img1.src = canvasPhone.current.toDataURL("image/png", 0.5);
    img2.src = canvasCover.current.toDataURL("image/png", 0.5);

    img1.onload = function () {
      context3.drawImage(img1, 0, 0);
      // console.log(canvasResult.current.toDataURL("image/png", 0.5));
      img2.onload = () => {
        context3.drawImage(img2, 0, 0);
        dispatch(
          setFinalCover(canvasResult.current.toDataURL("image/png", 0.5))
        );
      };
    };

    // const img3 = canvasResult.current.toDataURL("image/png", 0.5);
    // return "hello";
  };

  return (
    <CanvasContainer>
      <CanvasWrap>
        <Canvas ref={canvasPhone} height="860px" width="860px" />
        <Canvas ref={canvasCover} height="860px" width="860px" />
        <Canvas ref={canvasFont} height="860px" width="860px" />
        <Canvas
          className="hide"
          ref={canvasResult}
          height="860px"
          width="860px"
        />
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
  transition: all 0.5s ease-in-out;
  &.hide {
    display: none;
  }
`;

const Buttons = [
  { id: 1, iconImg: <SiAdobephonegap />, name: "색상변경" },
  { id: 2, iconImg: <BsUpload />, name: "이미지업로드" },
  { id: 3, iconImg: <MdTextFields />, name: "텍스트" },
  { id: 4, iconImg: <BiSticker />, name: "스티커" },
];
