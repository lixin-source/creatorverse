import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './routes/Layout.jsx';
import Add from './routes/Add.jsx';
import DetailView from './routes/DetailView';
import Edit from './routes/Edit.jsx';


// Importing your pages for showing all creators, viewing a creator, editing a creator, adding a creator
// Defining the paths and elements for the main page, edit page, new page, and view page

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index={true} element={<App />} />
        <Route index={false} path="/add" element={<Add />} />
        <Route index={false} path="/detailView/:id" element={<DetailView />}/>
        <Route index={false} path="/edit/:id" element={<Edit />}/>
        </Route>
        </Routes>
  </BrowserRouter>
  </React.StrictMode>,
)
