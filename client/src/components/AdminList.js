import React from 'react';
import { List, Datagrid, TextField,DateField,EditButton,DeleteButton } from 'react-admin';

const AdminList = (props) => {
    console.log("props",props)
    return <List {...props}>
        <Datagrid>
            <TextField soruce="id"/>
            <TextField soruce="name"/>
            <TextField soruce="email"/>
            <TextField soruce="password"/>
            <TextField soruce="role"/>
            <TextField soruce="contactNumber"/>
            <EditButton basePath='/Admins' />
            <DeleteButton basePath='/Admins' />
        </Datagrid>
    </List>
}

export default AdminList;
