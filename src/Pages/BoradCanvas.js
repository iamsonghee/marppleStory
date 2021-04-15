import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import DecoButton from "../Components/DecoButton";

import { BsUpload } from "react-icons/bs";
import { MdTextFields } from "react-icons/md";
import { SiAdobephonegap } from "react-icons/si";
import { BiSticker } from "react-icons/bi";

function BoradCanvas() {
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    console.log(canvas);
    const context = canvas.getContext("2d");
    const imgSrc = "/images/phone_white.png";

    const drawImage = (img) => {
      canvas.height = img.height;
      canvas.width = img.width;
      context.drawImage(img, 0, 0, img.width, img.height);
    };

    const loadImage = (e) => {
      // context.fillStyle = "#FF3B98";
      // context.fillRect(0, 0, canvas.width, canvas.height);
      // var i, j;
      // for (i = 0; i < 100; i++) {
      //   for (j = 0; j < 100; j++) {
      //     if ((i + j) % 2 === 0) {
      //       context.fillRect(20 * i, 20 * j, 20, 20);
      //     }
      //   }
      // }
      const img = new Image();
      img.src = imgSrc;
      img.addEventListener("load", () => {
        drawImage(img);
      });
    };
    loadImage();

    const redButton = document.querySelector('input[value="Red"]');

    redButton.addEventListener("click", () => {
      const imgData = context.getImageData(0, 0, canvas.width, canvas.height);
      console.log("********:", imgData);
      for (let i = 0; i < imgData.data.length; i += 4) {
        if (imgData.data[i + 3] !== 0) {
          imgData.data[i] = 255;
          imgData.data[i + 1] = 0;
          imgData.data[i + 2] = 0;
          imgData.data[i + 3] = imgData.data[i + 3];
        }
      }
      context.putImageData(imgData, 0, 0);
    });
  });

  // useEffect(() => {
  //   const canvas = document.getElementById("canvas");
  //   console.log("dom:::", canvas);
  //   const ctx = canvas.getContext("2d");
  //   // let x = canvas.getContext("2d");

  //   const img = new Image();
  //   img.src =
  //     "https://s3.marpple.co/files/u_1488025/2021/3/original/633099f978760b6f54467a4df8252c6fece0c1c61.png?canvas=v3";

  //   img.onload = function () {
  //     ctx.fillStyle = "orange";
  //     ctx.fillRect(0, 0, "200px", "200px");
  //     ctx.drawImage(img, 0, 0); // destination rectangle
  //   };
  // });

  return (
    <CanvasContainer>
      <CanvasWrap>
        <input type="button" value="Red" class="btn" />
        <Canvas id="canvas" height="860px" width="860px" />
      </CanvasWrap>
      <DecoButtons>
        {Buttons.map((button) => (
          <DecoButton
            key={button.id}
            iconImg={button.iconImg}
            name={button.name}
          />
        ))}
      </DecoButtons>
    </CanvasContainer>
  );
}

export default BoradCanvas;

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
`;

const Buttons = [
  { id: 1, iconImg: <SiAdobephonegap />, name: "상품변경" },
  { id: 2, iconImg: <BsUpload />, name: "이미지업로드" },
  { id: 3, iconImg: <MdTextFields />, name: "텍스트" },
  { id: 4, iconImg: <BiSticker />, name: "스티커" },
];
