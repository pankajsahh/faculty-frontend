import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/auth/login/Login.jsx";
import Home from "./Pages/Home/Home.jsx";
import Register from "./Pages/auth/register/Register.jsx";
import UpdatePage from "./Pages/update/UpdatePage";
import JournalItemList from "./components/ItemList/JournalItemList";
import ConfrenceItemList from "./components/ItemList/ConfrenceItemList";
import BookList from "./components/ItemList/BookItemList.jsx";
import SearchPage from "./Pages/Search/SearchPage.jsx";
import Feedback from "./Pages/Feedback/Feedback";
import Contact from "./Pages/Contact/Contact";
import DataFiltered from "./components/SearchItem/dataFileterList/DataFiltered.jsx";
import BookFilter from "./components/SearchItem/dataFileterList/BookFilter";
import JournalFilter from "./components/SearchItem/dataFileterList/journalfilter";
import Confrencefilter from "./components/SearchItem/dataFileterList/confrencedatafilter";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />

        <Route path="/update" element={<UpdatePage />}>
          <Route path="/update/Booklist" element={<BookList />} />
          <Route path="/update/confrencelist" element={<ConfrenceItemList />} />
          <Route path="/update/journallist" element={<JournalItemList />} />
        </Route>

        <Route path="/search" element={<SearchPage />}>
          <Route path="/search/faculty" element={<DataFiltered />}/>
          <Route path="/search/books" element={<BookFilter/>}/>
          <Route path="/search/journals" element={<JournalFilter/>}/>
          <Route path="/search/confrences" element={<Confrencefilter/>}/>
        </Route>

        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/contactUs" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
