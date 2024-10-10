import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserForm from "./pages/UserForm";
import ViewUser from "./pages/ViewUser";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserForm/>}/>
        <Route path="/view-user/:id" element={<ViewUser/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
