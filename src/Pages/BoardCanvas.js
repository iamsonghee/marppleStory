import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DecoButton from "../Components/DecoButton";

import { BsUpload } from "react-icons/bs";
import { MdTextFields } from "react-icons/md";
import { SiAdobephonegap } from "react-icons/si";
import { BiSticker } from "react-icons/bi";

import { useDispatch, useSelector } from "react-redux";
import { setFinalCover } from "../store/actions";

function BoardCanvas() {
  const PHONE_IMG = "/images/phone_white.png";
  const CASE_IMG = "/images/phone_cover.png";

  const dispatch = useDispatch();

  const colorStore = useSelector((store) => store.colorReducer);
  const fontStore = useSelector((store) => store.fontReducer);
  const modalStore = useSelector((store) => store.modalReducer);
  const bImageStore = useSelector((store) => store.bImageReducer);

  const canvasPhone = useRef(null);
  const canvasCover = useRef(null);
  const canvasFont = useRef(null);
  const canvasResult = useRef(null);

  const clearCanvas = (context, canvas) => {
    context.clearRect(0, 0, canvas.current.width, canvas.current.height);
  };

  useEffect(() => {
    const context = canvasPhone.current.getContext("2d");
    const imgSrc = PHONE_IMG;
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
      //
      fnPrintFinalCover();
    }
  }, [modalStore]);

  useEffect(() => {
    const context = canvasCover.current.getContext("2d");

    const imgBCover = new Image();
    imgBCover.src = CASE_IMG;

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
    const imgSrc_cover = CASE_IMG;

    const imgCover = new Image();

    imgCover.src = imgSrc_cover;

    imgCover.onload = () => {
      fnDrawImage(imgCover, canvasCover, context, handleClickColor);
    };
  }, [colorStore]);

  useEffect(() => {
    const context = canvasFont.current.getContext("2d");
    clearCanvas(context, canvasFont);
    context.fillStyle = "#" + fontStore.txtColor;
    const fontStyle = "bold italic " + fontStore.size + "pt " + fontStore.font;
    context.font = fontStyle;
    context.fillText(fontStore.text, 280, 400);
  }, [fontStore]);

  const handleClickColor = () => {
    const context = canvasCover.current.getContext("2d");

    let rgbArr = hexToRgb(colorStore[0].color);

    const imgData = context.getImageData(0, 0, 860, 860);
    for (let i = 0; i < imgData.data.length; i += 4) {
      if (imgData.data[i + 3] !== 0) {
        imgData.data[i] = rgbArr[0];
        imgData.data[i + 1] = rgbArr[1];
        imgData.data[i + 2] = rgbArr[2];
        imgData.data[i + 3] = imgData.data[i + 3];
      }
    }
    context.putImageData(imgData, 0, 0);
  };

  function hexToRgb(hex) {
    /* rgb??? ?????? ???????????? ????????? ??????. */
    var rgb =
      3 === hex.length ? hex.match(/[a-f\d]/gi) : hex.match(/[a-f\d]{2}/gi);
    rgb.forEach(function (str, x, arr) {
      /* rgb ????????? ???????????? ???????????? ??????, ???????????? ????????????. */
      if (str.length === 1) str = str + str;

      /* 10????????? ????????????. */
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

  async function fnPrintFinalCover() {
    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();

    const context = canvasResult.current.getContext("2d");

    img1.src = canvasPhone.current.toDataURL("image/png", 0.5);
    img2.src = canvasCover.current.toDataURL("image/png", 0.5);
    img3.src = canvasFont.current.toDataURL("image/png", 0.5);
    await img1.decode();
    await img2.decode();
    await img3.decode();

    context.drawImage(img1, 0, 0);
    context.drawImage(img2, 0, 0);
    context.drawImage(img3, 0, 0);

    dispatch(setFinalCover(canvasResult.current.toDataURL("image/png", 0.5)));
    // img1.onload = () => {
    //   context.drawImage(img1, 0, 0);
    //   img2.onload = () => {
    //     context.drawImage(img2, 0, 0);
    //     img3.onload = () => {
    //       context.drawImage(img3, 0, 0);
    //       dispatch(
    //         setFinalCover(canvasResult.current.toDataURL("image/png", 0.5))
    //         //
    //       );
    //     };
    //   };
    // };
  }

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
      <div className={modalStore && "lds-ripple"}>
        <div></div>
        <div></div>
      </div>
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

  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    /* background-color: tomato; */
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid tomato;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
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
  { id: 1, iconImg: <SiAdobephonegap />, name: "????????????" },
  { id: 2, iconImg: <BsUpload />, name: "??????????????????" },
  { id: 3, iconImg: <MdTextFields />, name: "?????????" },
  { id: 4, iconImg: <BiSticker />, name: "?????????" },
];
