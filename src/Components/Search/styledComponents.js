import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
`;
export const InputWrapper = styled.input`
  background-color: #1d2537;
  border-radius: 10px;
  border: 1px solid #000000;
  outline: none;
  height: auto;
  width: 240px;
  padding: 8px 12px;
  font-size: 12px;
  color: #ffffff;
  margin: 10px;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;
