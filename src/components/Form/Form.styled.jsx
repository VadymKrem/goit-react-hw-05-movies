import styled from '@emotion/styled';

export const Input = styled.input`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  padding: 15px 16px;

  color: black;
  border: 2px solid;
  background: #3ed598;
  border-radius: 10px;
`;

export const Button = styled.button`
  width: 120px;
  height: 48px;
  margin-left: 20px;

  line-height: 100%;
  text-align: center;
  color: #ffffff;

  border-radius: 12px;

  background: #3ed598;
  /* box-shadow: 0px 2px 4px rgba(15, 218, 137, 0.3); */

  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background: #286053;
  }
`;
