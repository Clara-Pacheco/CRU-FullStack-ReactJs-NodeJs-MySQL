import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 100vw;
  background-color: ${({ theme}) => theme.COLORS.HEADER};
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 30px;

  margin-bottom: 100px;


`