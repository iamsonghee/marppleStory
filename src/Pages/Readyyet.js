import React from "react";
import styled from "styled-components";
function Readyyet() {
  return (
    <>
      <Ready>준 비 중</Ready>
    </>
  );
}

export default Readyyet;

const Ready = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  font-weight: 500;
  opacity: 0.5;
`;
