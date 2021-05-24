import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setModalWin } from "../../store/actions";

import { AiOutlineClose } from "react-icons/ai";

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
        <Wrap>
          <CaseImage>
            <img src={myPhonecase} alt="phone case" />
          </CaseImage>
          <PhoneInfo>
            <Main>
              <label>수량을 선택해주세요</label>
              <FullTitle>
                갤럭시 S21 울트라 범퍼 슬라이드 케이스 (무광) [화이트]
              </FullTitle>
              <ShortTitle>
                <div>갤럭시 S21 울트라</div>
                <input type="number"></input>
              </ShortTitle>
            </Main>
            <Bottom>
              <CP>
                <CPInfo>
                  <span>총 수량 : </span>
                  <span className="count">1</span>
                </CPInfo>
                <CPInfo>
                  <span className="price">223600</span> <span>원</span>
                </CPInfo>
              </CP>
              <Buttons>
                <div>바로구매</div>
                <div>장바구니</div>
              </Buttons>
            </Bottom>
          </PhoneInfo>
        </Wrap>
        <Close onClick={fnModalClose}>
          <AiOutlineClose></AiOutlineClose>
        </Close>
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
  display: flex;
  flex-direction: row;
  position: relative;
  background: white;
  height: 80%;
`;

const CaseImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: #f8f9fa;
  img {
    height: 100%;
    width: auto;
    object-fit: cover;
  }
`;

const PhoneInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
`;

const FullTitle = styled.div`
  font-size: 14px;
  padding: 20px 0px;
`;

const ShortTitle = styled.div`
  display: flex;
  font-size: 18px;
  justify-content: left;
  align-items: center;
  input {
    width: 50px;
    text-align: right;
    margin-left: 20px;
  }
`;
const Main = styled.div`
  padding: 30px;
  label {
    font-size: 20px;
    padding-bottom: 10px;
  }
`;

const Bottom = styled.div`
  background-color: rgba(50, 50, 50, 0.1);
  padding: 20px;
  font-weight: 600;
`;
const CP = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 15px;
`;

const CPInfo = styled.div`
  font-size: 18px;
`;
const Buttons = styled.div`
  display: flex;
  div {
    width: 100%;
    border: 1px solid black;
    padding: 15px;
    text-align: center;
    cursor: pointer;
    &:first-child {
      background-color: white;
    }
    &:last-child {
      margin-left: 5px;
      background-color: black;
      color: white;
    }
  }
`;

const Wrap = styled.div`
  display: flex;
  width: 100%;
`;

const Close = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  cursor: pointer;
  svg {
    font-size: 25px;
    opacity: 0.7;
  }
`;
