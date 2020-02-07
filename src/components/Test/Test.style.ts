import styled from "styled-components";

export const TabContainer = styled.div`
  input {
    display: none;
  }

  input ~ .tab {
    display: none;
  }

  input + label {
    border: 1px solid #999;
    background: #eee;
    padding: 4px 12px;
    border-radius: 4px 4px 0 0;
    position: relative;
    top: 1px;
  }
  input:checked + label {
    background: #fff;
    border-bottom: 1px solid transparent;
  }
  input ~ .tab {
    display: flex;
    flex-direction: row;
    border-top: 1px solid #999;
    padding: 12px;
  }
`;

export const TabPanel = styled.div`
  #tab1:checked ~ .tab.panel1,
  #tab2:checked ~ .tab.panel2 {
    display: block;
  }
`;
