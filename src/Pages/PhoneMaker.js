import React, { useEffect, useState } from "react";
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
import BoradCanvas from "./BoardCanvas";
import Options from "./Options";
import { useSelector } from "react-redux";

function PhoneMaker() {
  const colorFromStore = useSelector((store) => store.colorReducer);
  const FontFromStore = useSelector((store) => store.fontReducer);
  const btnFromStore = useSelector((store) => store.btnReducer);

  const color = colorFromStore[0].color;
  const txtColor = FontFromStore.txtColor;
  const [btnId, setBtnId] = useState(null);
  const fnClickLayout = (btnId) => {
    setBtnId(btnId);
  };
  return (
    <>
      <Maker>
        <MBoard>
          <BoradMenu>
            {canvasMenuItems.map((item) => {
              return (
                <li key={item.id} onClick={() => fnClickLayout(item.id)}>
                  <Icon>{item.icon}</Icon>
                  <IName>{item.text}</IName>
                </li>
              );
            })}
          </BoradMenu>
          <BoradCanvas
            selColor={color}
            seleTxtColor={txtColor}
            clickedBtnId={btnFromStore}
            topButton={btnId}
          />
        </MBoard>
        <Options clickedBtnId={btnFromStore} />
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
  min-width: 70%;
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
  { id: 0, text: "????????????", name: "reset", icon: <AiOutlineUndo /> },
  { id: 1, text: "??????", name: "undo", icon: <MdUndo /> },
  { id: 2, text: "????????????", name: "redo", icon: <MdRedo /> },
  { id: 3, text: "??????", name: "trash", icon: <BsTrash /> },
  { id: 4, text: "?????????", name: "forward", icon: <BiLayerPlus /> },
  { id: 5, text: "??????", name: "backward", icon: <BiLayerMinus /> },
  { id: 6, text: "????????????", name: "flip_h", icon: <CgEditFlipH /> },
  { id: 7, text: "????????????", name: "flip_v", icon: <CgEditFlipV /> },
  { id: 8, text: "??????", name: "group_left", icon: <CgAlignLeft /> },
  { id: 9, text: "?????????", name: "group_center", icon: <CgAlignCenter /> },
  { id: 10, text: "?????????", name: "group_right", icon: <CgAlignRight /> },
  { id: 11, text: "???", name: "group_top", icon: <CgAlignTop /> },
  { id: 12, text: "?????????", name: "group_middle", icon: <CgAlignMiddle /> },
  { id: 13, text: "??????", name: "gropu_bottom", icon: <CgAlignBottom /> },
];
