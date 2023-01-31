import styled from "styled-components";

export const Fieldset = styled.fieldset`
  background-color: ${({ theme }) => theme.color.white};
  margin: 5px;
  padding: 5px 50px;
  border-color: ${({ theme }) => theme.color.lightGray};
  border-radius: 5px;
  box-shadow: 3px 3px 15px 0px rgba(102, 102, 102, 0.37);
`;

export const Legend = styled.legend`
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  padding: 15px;
  font-size: 20px;
  border-color: ${({ theme }) => theme.color.lightGray};
  box-shadow: 3px 3px 15px 0px rgba(102, 102, 102, 0.37);
`;

export const Label = styled.label`
  font-style: italic;
`;

export const Rate = styled.div`
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.color.darkGray};
  background-color: ${({ theme }) => theme.color.lightGray};
  margin-bottom: 5px;
  width: 75px;
  border-radius: 5px;
`;

export const Information = styled.div`
  font-size: 12px;
  margin-bottom: 20px;
`;

export const Loader = styled.div`
  margin: 40px;
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;

   @keyframes spin {
    0% {
     transform: rotate(0deg);
    };
    100% {
     transform: rotate(360deg);
    };
  };

  @media (max-width: 767px) {
  width: 80px;
  height: 80px;
  }
`;

export const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items:center;
`