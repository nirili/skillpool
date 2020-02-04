import React, { FunctionComponent } from "react";
import { TabStyle } from "./Tab.style";

export interface TabProps {
  label: string;
}

const Tab: FunctionComponent<TabProps> = ({ label }) => {
  return (
    <>
      <TabStyle>
        <p>{label}</p>
      </TabStyle>
    </>
  );
};

export default Tab;
