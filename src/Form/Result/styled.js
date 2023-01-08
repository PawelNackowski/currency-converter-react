import styled from "styled-components";

export const Value = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Input = styled.input`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border-color: #ccc;

&:hover {
  background-color: hsl(0, 0%, 95%);
}
`;