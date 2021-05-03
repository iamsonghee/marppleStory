import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function ImgSilider() {
  const startPos = -75;
  const endPos = startPos - slideImages.length * 50;

  const [leftPos, setleftPos] = useState(-75);
  const [cssTrans, setCssTrans] = useState();
  const slideWidth = slideImages.length * 100;

  const fn_ClickPrev = () => {
    setleftPos(leftPos - 50);
  };
  const fn_ClickNext = () => {
    setleftPos(leftPos + 50);
  };
  const fn_setTrans = (pos, callback) => {
    // setCssTrans("none");
    callback(pos);
  };

  useEffect(
    function fb_CheckLeftPosition() {
      setCssTrans("all ease-in-out 0.4s");
      if (leftPos === -25) {
        //첫번째 장
        setTimeout(() => {
          setCssTrans("none");
          fn_setTrans(-225, setleftPos);
        }, 550);
      } else if (leftPos === endPos) {
        //마지막장
        setTimeout(() => {
          setCssTrans("none");
          fn_setTrans(-75, setleftPos);
        }, 550);
      }
    },
    [leftPos]
  );

  // useEffect(() => {
  //   if (cssTrans === "none" && leftPos === -225) {
  //     setCssTrans("all ease-in-out 0.4s");
  //   }
  // }, [leftPos, cssTrans]);

  return (
    <SliderWrap>
      <SliderContainer
        style={{
          left: `${leftPos}%`,
          width: `${slideWidth}%`,
          transition: `${cssTrans}`,
        }}
      >
        <div className="inner">
          <img
            src={Object.entries(slideImages)[slideImages.length - 2][1].url}
            alt="slideImage"
          />
        </div>
        <div className="inner">
          <img
            src={Object.entries(slideImages)[slideImages.length - 1][1].url}
            alt="slideImage"
          />
        </div>
        {slideImages.map((item, idx) => {
          return (
            <div className="inner">
              <img src={item.url} alt="slideImage" />
            </div>
          );
        })}
        <div className="inner">
          <img src={Object.entries(slideImages)[0][1].url} alt="slideImage" />
        </div>
        <div className="inner">
          <img src={Object.entries(slideImages)[1][1].url} alt="slideImage" />
        </div>
      </SliderContainer>
      <SlideButtons>
        <div className="btn prev" onClick={fn_ClickPrev}>
          <MdKeyboardArrowLeft />
        </div>
        <div className="btn next" onClick={fn_ClickNext}>
          <MdKeyboardArrowRight />
        </div>
      </SlideButtons>
    </SliderWrap>
  );
}

export default ImgSilider;
const SliderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 600px;

  .btn {
    position: absolute;
    top: 50%;
    &.prev {
      left: 0px;
    }
    &.next {
      right: 0;
    }
    svg {
      color: white;
      font-size: 50px;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 50%;
    }
  }
`;
const SlideButtons = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin: 0px 20px;
`;
const SliderContainer = styled.div`
  display: flex;
  position: absolute;
  //transition: none; //all ease-in-out 0.4s;
  .inner {
    width: 50%;
    /* width: calc(50vw - 7.5px); */
    padding: 0px 10px;
  }
  img {
    width: 100%;
    object-fit: none;
  }
`;

const slideImages = [
  {
    url:
      "https://s3.marpple.co/files/u_1488025/2021/3/original/d1c7c58a308e36182c8947a4522abde0dd711e936.jpg",
  },
  {
    url:
      "https://s3.marpple.co/files/u_1488025/2021/3/original/5531775dcbe97d9fd3c312fbf4ba11cd2de15c055.jpg",
  },
  {
    url:
      "https://s3.marpple.co/files/u_1488025/2021/3/original/992aab5b7b7fb86132e761ed5eb4e25aa17635849.jpg",
  },
  {
    url:
      "https://s3.marpple.co/files/u_1488025/2021/3/original/a39c802b461aebe2733ec0415c0dfae8b969fa8e8.jpg",
  },
];
