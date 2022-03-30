import styled from "styled-components";

export const Menu = styled.ul`
  list-style: none;
  display: flex;
`;

export const List = styled.li`
  font-size: 20px;
  font-weight: bold;
  align-self: center;
	margin-right: 20px;
`;

export const Chng = styled.a`
  text-decoration: none;
  color: #fff;
	&:hover {
		color: black;
	}
`;
