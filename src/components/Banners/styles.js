import styled from 'styled-components';

export const Banners = styled.div`
  height: 402px;
  width: 402px;
  background: url(${(props) => props.backgroundColor});
  background-repeat: no-repeat;
  background-size: contain;
`;
