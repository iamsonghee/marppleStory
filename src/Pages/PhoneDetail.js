import React from "react";
import styled from "styled-components";
import ImgSilider from "../Components/ImgSilider";

function PhoneDetail() {
  return (
    <>
      <Detail>
        <ImgSilider />
      </Detail>
    </>
  );
}

export default PhoneDetail;

const Detail = styled.div`
  display: flex;
  width: 100%;
`;
