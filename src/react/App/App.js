import "./App.css";
import HomePage from "../pages/HomePage.component";
import { Layout } from "antd";
import React from "react";

const { Content } = Layout;

function App() {
  return (
    <Layout className="appLayout">
      <Content className="appContent">
        <HomePage />
      </Content>
    </Layout>
  );
}

export default App;
