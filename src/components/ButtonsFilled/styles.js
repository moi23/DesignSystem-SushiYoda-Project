import styled from 'styled-components';

export const ButtonsFilled = styled.div`
  height: 50px;
  width: 280px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;

  color: ${(props) => props.color};
  font-family: 'Roboto', sans-serif !important;
  font-weight: 600;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;
