import React from "react";
import styled from "styled-components";
import { AiOutlineUndo } from "react-icons/ai";
import { MdUndo, MdRedo } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { BiLayerPlus, BiLayerMinus } from "react-icons/bi";
import {
  CgEditFlipV,
  CgEditFlipH,
  CgAlignLeft,
  CgAlignCenter,
  CgAlignRight,
  CgAlignTop,
  CgAlignBottom,
  CgAlignMiddle,
} from "react-icons/cg";
import BoradCanvas from "./BoradCanvas";
import Options from "./Options";
function PhoneMaker() {
  return (
    <>
      <Maker>
        <MBoard>
          <BoradMenu>
            {canvasMenuItems.map((item) => {
              return (
                <li key={item.id}>
                  <Icon>{item.icon}</Icon>
                  <IName>{item.text}</IName>
                </li>
              );
            })}
          </BoradMenu>
          <BoradCanvas />
        </MBoard>
        <Options />
      </Maker>
    </>
  );
}

export default PhoneMaker;

const Maker = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 70px);
`;

const MBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
const BoradMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 66px;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 12px;
  }
`;
const Icon = styled.div`
  svg {
    font-size: 22px;
  }
`;
const IName = styled.div`
  font-size: 12px;
  padding-top: 3px;
`;

const canvasMenuItems = [
  { id: 0, text: "처음으로", name: "reset", icon: <AiOutlineUndo /> },
  { id: 1, text: "취소", name: "undo", icon: <MdUndo /> },
  { id: 2, text: "다시실행", name: "redo", icon: <MdRedo /> },
  { id: 3, text: "삭제", name: "trash", icon: <BsTrash /> },
  { id: 4, text: "앞으로", name: "forward", icon: <BiLayerPlus /> },
  { id: 5, text: "뒤로", name: "backward", icon: <BiLayerMinus /> },
  { id: 6, text: "좌우반전", name: "flip_h", icon: <CgEditFlipH /> },
  { id: 7, text: "상하반전", name: "flip_v", icon: <CgEditFlipV /> },
  { id: 8, text: "왼쪽", name: "group_left", icon: <CgAlignLeft /> },
  { id: 9, text: "가운데", name: "group_center", icon: <CgAlignCenter /> },
  { id: 10, text: "오른쪽", name: "group_right", icon: <CgAlignRight /> },
  { id: 11, text: "위", name: "group_top", icon: <CgAlignTop /> },
  { id: 12, text: "가운데", name: "group_middle", icon: <CgAlignMiddle /> },
  { id: 13, text: "아래", name: "gropu_bottom", icon: <CgAlignBottom /> },
];
