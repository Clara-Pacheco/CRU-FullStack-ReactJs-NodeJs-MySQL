import styled from "styled-components";

export const Table=styled.table`
  width: 100%;
  background-color: ${({ theme}) => theme.COLOR.WHITE};
  padding: 20px;
  box-shadow: 0px 0px 5px ${({ theme })=> theme.COLORS.BOX_SHADOW};
  border-radius: 5px;
  max-width: 800px;
  margin: 20px auto;
  word-break: break-all;

`;