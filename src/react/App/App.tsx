import "../../styles/index.less";
import HomePage from "../pages/HomePage/HomePage.component";
import { Layout } from "antd";
import React from "react";

const { Content } = Layout;

function App() {
  return (
    <div className="react-portifolio">
      <Layout className="appLayout">
        <Content className="appContent">
          <HomePage />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
