import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// layouts
import MainLayOut from "./components/layouts/main/MianLayOut";

// pages
import Home from "./pages/home";
import CardPage from "pages/cardPage";

// Test page
// import Test from "./pages/Test";

const App = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "ToDoList");
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route index element={<Home />} />

          <Route path="card/:cardId" element={<CardPage />}>
            {/* <Route index element={<Post />} /> */}
            {/* <Route path=":postId" element={<div>fr2</div>} /> */}
            {/* <Route path="edit/:postId" element={<EditPostForm />} /> */}
          </Route>
          <Route
            path="/*"
            element={
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h1>404</h1>
                <h4>PAGE NOT FOUND</h4>
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
