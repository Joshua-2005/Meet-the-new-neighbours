import React from "react";
import ReactDOM from "react-dom";
import Tab from "./components/Tab";
import TabsPanel from "./components/TabsPanel";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Tabs</h1>
      <TabsPanel>
        <Tab title="React" subtitle="What is react" icon="far fa-address-card">
          React is a java space library developed by Facebook it helps
          developers build interactive ui by creating reusable components.
        </Tab>
        <Tab
          title="Why use react?"
          subtitle="Use of react :"
          icon="fas fa-hourglass-start"
        >
          React is component based architecture and react is declarative.
        </Tab>
        <Tab title="JSX" subtitle="JSX means :" con="fas fa-hourglass-start">
          jsx means java script+HTML.
        </Tab>
      </TabsPanel>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
