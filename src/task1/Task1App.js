import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedbackForm from "./component/FeedbackForm";
import FeedbackList from "./component/FeedbackList";

function Task1App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/feedbacklist" element={<FeedbackList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Task1App;