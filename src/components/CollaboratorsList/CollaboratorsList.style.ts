import styled from "styled-components";

export const ListTable = styled.table`
  width: 90%;
  height: auto;
  margin: 0 auto;
  border-collapse: collapse;

  box-shadow: 0 10px 14px -12px #777;

  thead {
    background: lightblue;
  }

  th {
    padding-left: 10px;
    height: 40px;
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
  }

  tbody {
    background: #fff;
  }

  tbody tr:hover {
    background: #cbe8f2;
  }

  tr {
    height: 45px;
  }
`;
