import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Events from "./components/Events";
import { useState } from "react";

function App() {
  const [typeFilter, setTypeFilter] = useState("both");
  const [search, setSearch] = useState("");

  return (
    <>
      <Header search={search} setSearch={setSearch} />

      <hr className="container mt-3" />

      <div className="container">
        <div className="row">
          <div className="col-6 mt-2">
            <h1 className="fw-bold event-title">
              Meetup Events
            </h1>
          </div>

          <div className="col-6">
            <select
              className="form-select float-end mt-2"
              style={{ width: 180, color: "#9aa0a6" }}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option selected value="both">
                Select Event Type
              </option>
              <option value="both">Both</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </div>
        </div>
      </div>

      <Events typeFilter={typeFilter} search={search} />

      <Footer />
    </>
  );
}
export default App;
