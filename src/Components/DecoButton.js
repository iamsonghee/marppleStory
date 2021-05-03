import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setButton } from "../store/actions";

function DecoButton(props) {
  const dispatch = useDispatch();
  const handleOnclick = (id) => {
    dispatch(setButton(id));
  };
  return (
    <>
      <RoundButton onClick={() => handleOnclick(props.id)}>
        <Icon>{props.iconImg}</Icon>
        <Name>{props.name}</Name>
      </RoundButton>
    </>
  );
}

export default DecoButton;

const RoundButton = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
  }

  &:hover {
    background-color: #f3c3c6;
    > svg {
      color: white;
    }
  }
`;

const Name = styled.div`
  margin: 10px 0px 20px 0px;
  font-size: 13px;
  width: 150%;
  text-align: center;
`;
