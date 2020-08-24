import "../../styles/index.less";
import { Layout, Spin } from "antd";
import React, { Suspense } from "react";
import { persistor, store } from "../../redux/store";
import IntlProvider from "../HocComponents/IntlProvider.component";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const { Content } = Layout;

const HomePage = React.lazy(() =>
  import("../Pages/HomePage/HomePage.component")
);

const ProjectsPage = React.lazy(() =>
  import("../Pages/ProjectsPage/ProjectsPage.component")
);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <IntlProvider>
          <div className="react-portifolio">
            <Layout className="appLayout">
              <Content className="appContent">
                <Suspense fallback={<Spin spinning />}>
                  <HomePage />
                  <ProjectsPage />
                </Suspense>
              </Content>
            </Layout>
          </div>
        </IntlProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
