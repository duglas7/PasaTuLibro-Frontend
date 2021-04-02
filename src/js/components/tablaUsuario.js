import React from 'react';
import { MDBInput, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';


const TablePage = (props) => {
    const data_checkboxes = {
        columns: [
            {
                'label': '',
                'field': 'check',
                'sort': 'asc',
                'width': 50,
            },
            {
                label: "Nombres",
                field: "nombres",
                sort: "asc",
                width: 150,
            },
            {
                label: "Email",
                field: "email",
                sort: "asc",
                width: 150,
            },
            {
                label: "Teléfono",
                field: "teléfono",
                sort: "asc",
                width: 150,
            },
            {
                label: "Dirección",
                field: "dirección",
                sort: "asc",
                width: 100,
            },
            {
                label: "Contraseña",
                field: "contraseña",
                sort: "asc",
                width: 150,
            },
            {
                label: "Perfil",
                field: "perfil",
                sort: "asc",
                width: 100,
            },
            ],
        rows: [
            {
                'check': <MDBInput type="checkbox" id="checkbox1" />,
                'nombres': "Tiger Nixon",
                'email': "system.architect@gmail.com",
                'teléfono': "562 22 22 22",
                'dirección': "El Peral 61",
                'contraseña': "2011/04/25",
                'perfil': "user",
                
            },
            {
                'check': <MDBInput type="checkbox" id="checkbox2" />,
                'nombres': "Tiger Nixon",
                'email': "system.architect@gmail.com",
                'teléfono': "562 22 22 22",
                'dirección': "El Peral 61",
                'contraseña': "2011/04/25",
                'perfil': "user",
                
            },
            
        ]
    };

    return (
        <MDBTable btn fixed responsive autoWidth striped>
            <MDBTableHead columns={data_checkboxes.columns} />
            <MDBTableBody rows={data_checkboxes.rows} />
        </MDBTable>
    );
};

export default TablePage;