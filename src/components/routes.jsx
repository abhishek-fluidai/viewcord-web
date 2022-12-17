import React from "react";
import Home from "./pages/Home/Home";
import VideoPlayer from "./helper/VideoPlayer/VideoPlayer";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/:watch",
    element: <VideoPlayer video_id="CXAOv0Dj-2Q" />

  }
]);

export default router;
