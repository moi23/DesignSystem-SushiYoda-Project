import styled from 'styled-components';

export const InputsOutlinedWithIcons = styled.input`
  height: 50px;
  width: 280px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  outline: none;
  border: solid 1px ${(props) => props.colorBorder};
  padding-left: 2%;
  padding-right: 2%;

  &::placeholder {
    color: ${(props) => props.colorPlaceholder};
  }

  &:active {
    transition: 0.3s;
    opacity: 50%;
    transform-origin: center;
  }

  color: ${(props) => props.color};
  font-family: 'Roboto', sans-serif !important;
  font-weight: 600;
  background-color: transparent;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;
