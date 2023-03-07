import styled from 'styled-components';

export const Container = styled.ul`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  list-style: none;

  & li {
    display: flex;
    align-items: center;
    width: 200px;
    padding: 10px;
    font-weight: 600;
    border: 1px solid;
    border-radius: 4px;
    & img {
      margin-right: 15px;
    }
  }
`;

export const Status = styled.span`
  display: block;
  margin-right: 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? 'green' : 'red')};
`;
