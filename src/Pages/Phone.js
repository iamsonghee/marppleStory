import React from "react";
import { FcAssistant } from "react-icons/fc";
import styled from "styled-components";

function Phone() {
  return (
    <>
      <Mytest></Mytest>
      <div>테스트중입니다</div>
      <FcAssistant />
    </>
  );
}

export default Phone;

const Mytest = styled.div`
  display: flex;
  width: 500px;
  height: 40px;
  background-color: tomato;
`;
