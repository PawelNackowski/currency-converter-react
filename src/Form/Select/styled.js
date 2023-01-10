import styled from "styled-components";

export const StyledSelect = styled.select`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border-color: ${({theme}) => theme.color.gray};

  &:hover {
    filter: brightness(95%);
  }
`;