import React from 'react';
import { List, Datagrid, TextField,DateField,EditButton,DeleteButton } from 'react-admin';

const EmployeeList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField soruce="id"/>
            <TextField soruce="name"/>
            <TextField soruce="email"/>
            <TextField soruce="password"/>
            <TextField soruce="status"/>
            <TextField soruce="age"/>
            <TextField soruce="accountId"/>
            <TextField soruce="payrole"/>
            <TextField soruce="role"/>
            <TextField soruce="contactNumber"/>
            <TextField soruce="status"/>
            <TextField soruce="contactNumber"/>
            <EditButton basePath='/Employees' />
            <DeleteButton basePath='/Employees' />
        </Datagrid>
    </List>
}

export default EmployeeList;
 