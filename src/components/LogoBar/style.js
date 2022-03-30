import styled from "styled-components";
import shuriken from "../../assets/img/shuriken.png";

export const Container = styled.div`
  display: flex;
`;

export const HeaderImage = styled.img.attrs({
  src: `${shuriken}`,
})`
  height: 40px;
  margin: 10px;
  align-self: center;
`;

export const Head = styled.h1`
  font-size: 30px;
  color: #fff;
  align-self: center;
  margin: 0 10px;
`;
