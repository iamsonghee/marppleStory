import React, { useEffect } from "react";
import styled from "styled-components";

function BoradCanvas() {
  // const canvas = useRef(null);
  // console.log(canvas);

  return (
    <>
      <CanvasContainer>
        <Canvas />
      </CanvasContainer>
    </>
  );
}

export default BoradCanvas;

const CanvasContainer = styled.div`
  background-color: #f8f9fa;
  width: 100%;
  height: 100%;
  padding: 0px 120px;
`;
const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  background-color: goldenrod;
`;
