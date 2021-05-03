import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setModalWin } from "../../store/actions";

function ModalCart() {
  const dispatch = useDispatch();
  const fnModalClose = () => {
    dispatch(setModalWin(false));
  };
  const myPhonecase = useSelector((store) => store.finalCoverReducer);
  // console.log("asdfasdf: ", myPhonecase);

  return (
    <MyModal>
      <Content>
        <h3>이것은 모달</h3>
        <img src={myPhonecase} alt="" />
        <button onClick={fnModalClose}>닫기</button>
      </Content>
    </MyModal>
  );
}

export default ModalCart;

const MyModal = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background: white;
  padding: 1rem;
  width: 400px;
  height: auto;
  img {
    width: 200px;
    object-fit: cover;
  }
`;
