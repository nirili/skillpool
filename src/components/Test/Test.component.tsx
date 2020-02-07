import React, { FunctionComponent } from "react";
import { TabContainer } from "./Test.style";
import { TabPanel } from "../Tabs/Tabs.style";

interface TestProps {
  id: number;
  label: string;
  content: string;
  isChecked: boolean;
}

const Test: FunctionComponent<TestProps> = ({
  id,
  label,
  content,
  isChecked
}) => {
  return (
    <>
      <TabContainer>
        <input
          type="radio"
          name="tabs"
          id={`tab${id}`}
          defaultChecked={isChecked}
        />
        <label htmlFor={`tab${id}`}>{label}</label>

        <TabPanel>
          <div className={`tab panel${id}`}>
            <p>{content}</p>
          </div>
        </TabPanel>
      </TabContainer>
    </>
  );
};

export default Test;
