import styled from "styled-components";

export const Form=styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color:${({ theme }) => theme.COLORS.WHITE};
  padding: 20px;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.COLORS.BOX_SHADOW};
  border-radius: 5px;





`;