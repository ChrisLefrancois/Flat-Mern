import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlatList from './components/flatList.js';
import FlatDetail from './components/flatDetail.js';

const App = () => {
    return (
        <Router>
          <Routes>
            <Route path="/flats" exact element={<FlatList />} />
            <Route path="/flats/:flatId" element={<FlatDetail />} />
          </Routes>
        </Router>
    );
};

export default App;
