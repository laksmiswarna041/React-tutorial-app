import React, { useState } from 'react';
import './style.css';
import FilteredList from './filter';
import DataTable from './DataTable';

const App = () => {
  return (
    <div>
      <center><DataTable/></center>
      <FilteredList/>
    </div>
  )
}


export default App;
