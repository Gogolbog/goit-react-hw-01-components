import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  width: 300px;
  padding-left: 0;
  gap: 20px;

  & li {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    gap: 5px;
    background-color: green;
    color: white;
    padding: 4px;
  }
`;
