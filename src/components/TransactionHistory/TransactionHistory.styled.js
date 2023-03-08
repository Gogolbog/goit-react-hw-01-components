import styled from 'styled-components';

export const TransTabel = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  & thead {
    background-color: blue;
    color: purple;

    & th {
      padding: 10px;
      border: 1px solid yellow;
    }
  }
`;

export const TabelRow = styled.tr`
  & td {
    padding: 10px;
    border: 1px solid yellow;
    background-color: green;
    color: red;
  }
`;
