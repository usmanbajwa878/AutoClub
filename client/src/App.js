import React from 'react';
import {Admin,Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import EmployeeList from './components/EmployeeList';
import AdminList from './components/AdminList'

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:5000')}>
        <Resource name="Employees" list={EmployeeList} />
        <Resource name="Admins" list={AdminList} />
    </Admin>
  );
}

export default App;
