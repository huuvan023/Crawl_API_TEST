import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <header>
        <h1>Fetch Data VnExpress</h1>
      </header>
      <main className="container-fluid">
        <h2>Filter</h2>
        <div className="body row">
          <article className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div className="article">
              <h3>Author: </h3>
              <select>
                <option>Nguyen Van A</option>
                <option>Nguyen Van B</option>
                <option>Nguyen Van C</option>
              </select>
            </div>
          </article>
          <article className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div className="article">
              <h3>Date created: </h3>
              <input type="date"/>
              <span>to</span>
              <input type="date"/>  
            </div>
          </article>
          <article className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div className="article">
              <h3>Tittle: </h3>
              <input type="text"/>
            </div>
          </article>
        </div>
        <div className="result">
          <h2>Result</h2>
          <div className="result-body">
            <table className="border table-hover table-striped">
              <thead>
                <tr>
                  <th>Serial</th>
                  <th>Title</th>
                  <th>Link</th>
                  <th>Created_time</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jill</td>
                  <td>Smith</td>
                  <td>Smith</td>
                  <td>50</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>Eve</td>
                  <td>Jackson</td>
                  <td>Jackson</td>
                  <td>94</td>
                  <td>94</td>
                </tr>
              </tbody>
            </table>
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
