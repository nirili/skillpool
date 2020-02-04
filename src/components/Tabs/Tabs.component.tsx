import React, { FunctionComponent } from "react";
import Tab from "./Tab";
import { TabsContainer, TabList, TabPanel } from "./Tabs.style";

const labels = [
  {
    id: 1,
    name: "about"
  },
  {
    id: 2,
    name: "skills"
  }
];

const Tabs: FunctionComponent<{}> = () => {
  return (
    <>
      <TabsContainer>
        <TabList>
          {labels.map(label => (
            <Tab key={label.id} label={label.name} />
          ))}
        </TabList>
        <TabPanel>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quis
            fugiat unde nostrum adipisci vitae illo incidunt consequatur
            explicabo et sed natus, optio velit eveniet asperiores aliquid,
            illum dicta maiores distinctio rem. Odit quaerat praesentium quod
            laborum blanditiis modi id!
          </p>
        </TabPanel>
      </TabsContainer>
    </>
  );
};

export default Tabs;
