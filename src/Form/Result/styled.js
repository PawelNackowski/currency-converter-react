import styled from "styled-components";

export const Value = styled.div`
  margin: 10px 0 10px 0;
  display: flex;
  justify-content: flex-end;
`;

export const Input = styled.input`
  margin: 15px 0 15px 0;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border-color: ${({theme}) => theme.color.gray};

  &:hover {
    filter: brightness(95%);
  }
`;