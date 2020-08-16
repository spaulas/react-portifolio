import "../../styles/index.less";
import React, { Suspense } from "react";
import { persistor, store } from "../../redux/store";
import { Layout } from "antd";
import { PersistGate } from "redux-persist/integration/react";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage.component";
import { Provider } from "react-redux";

const { Content } = Layout;

const HomePage = React.lazy(() =>
  import("../pages/HomePage/HomePage.component")
);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="react-portifolio">
          <Layout className="appLayout">
            <Content className="appContent">
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
              <ProjectsPage />
            </Content>
          </Layout>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
