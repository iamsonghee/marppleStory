import React from "react";
import styled from "styled-components";

function PhoneDetail() {
  return (
    <>
      <Detail></Detail>
    </>
  );
}

export default PhoneDetail;

const Detail = styled.article`
  display: flex;
  width: 100%;
  height: 1000px;
  background-color: teal;
`;
