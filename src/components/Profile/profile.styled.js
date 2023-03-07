import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ebe8e8;
  width: 250px;
  margin: auto;
  margin-top: 100px;
`;
export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;
export const StatsLists = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding-left: 0;

  & li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    font-weight: 500;
  }
`;
