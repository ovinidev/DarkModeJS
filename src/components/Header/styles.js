import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 3rem;

  justify-content: space-between;
`;
