import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Movies from "./Pages/Movies";
import Settings from "./Pages/Settings";
import Trending from "./Pages/Trending";
import WebSeries from "./Pages/WebSeries";
import UserProfile from "./Pages/UserProfile";

function App() {
  console.log("render");
  return (
    // TODO: add an array to map the route and element (with layout)
    <BrowserRouter>
      <Routes className="App-header">
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/trending"
          element={
            <Layout>
              <Trending />
            </Layout>
          }
        />

        <Route
          path="/web-series"
          element={
            <Layout>
              <WebSeries />
            </Layout>
          }
        />
        <Route
          path="/movies"
          element={
            <Layout>
              <Movies />
            </Layout>
          }
        />

        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <UserProfile />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
