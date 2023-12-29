import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Redirector from './Redirector';

import './App.css'

function App() {
  const [bigUrl, setBigUrl] = useState("");
  const [urlObj, setUrlObj] = useState(null);

  async function clickHandler() {
    const response = await axios.post("https://sdapp-ivpony3d.b4a.run/", { originalURL: bigUrl });
    console.log(response.data);
    setUrlObj(response.data);

  } 

  async function getHandler() {
    const response = await axios.get("https://sdapp-ivpony3d.b4a.run/npx4wSgl");
    console.log(response.data);
    setUrlObj(response.data);
  }
  return (
    <Router>
    <div className="container">
      <h1>URL Shortner</h1>
      <Routes>
      <Route 
          path="/bob"
          element={
            <div>
              this is the bob page
            </div>
          }
        />
        <Route 
          path="/:shortCode"
          element={<Redirector />}
        />
        <Route 
          path="/"
          element={
            <div>
              <input id="urlInput" type="text" value={bigUrl}  onChange={(e) => {setBigUrl(e.target.value)}}/>
              <button onClick={clickHandler}>Shorten</button>
              {<a href={`/${urlObj?.shortCode}`}>{urlObj?.shortCode}</a>}
            </div>
          }
        />

      {/* <input id="urlInput" type="text" value={bigUrl}  onChange={(e) => {setBigUrl(e.target.value)}}/>
      <button onClick={clickHandler}>Shorten</button>
      <button onClick={getHandler}>GET</button>

      <div>
        {urlObj ? window.location.href = urlObj.originalURL : <>no url</>}
      </div> */}

      </Routes>
    </div>
    </Router>
  )
}

export default App
