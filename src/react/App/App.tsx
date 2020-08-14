import "../../styles/index.less";
import { persistor, store } from "../../redux/store";
import HomePage from "../pages/HomePage/HomePage.component";
import { Layout } from "antd";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import React from "react";

const { Content } = Layout;

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="react-portifolio">
          <Layout className="appLayout">
            <Content className="appContent">
              <HomePage />
            </Content>
          </Layout>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
