import React, { useState } from 'react';
import { CrudTable } from './CrudTable';
import { CrudForm } from './CrudForm';

const initialDb = [
    {
        id: 1,
        name: "name1",
        email: "email1@mail.com"
    },
    {
        id: 2,
        name: "name2",
        email: "email2@mail.com"
    },
    {
        id: 3,
        name: "name3",
        email: "email3@mail.com"
    },
    {
        id: 4,
        name: "name4",
        email: "email4@mail.com"
    }
];

export const CrudApp = () => {
    const [ db, setDb ] = useState( initialDb );
    const [ dataToEdit, setDataToEdit ] = useState( null );
    
    const createData = ( data ) =>
    { 
        data.id = Date.now();
        //console.log( data );
        setDb( [ ...db,data ] );
    };

    const updateData = ( data ) => { };

    const deleteData = ( id ) => { };

    return (
        <div>
            <h2>CRUD App</h2>
            <CrudForm
                createData={ createData } updateData={ updateData } dataToEdit={ dataToEdit } setDataToEdtit={ setDataToEdit }
            />
            <CrudTable
                data={ db }
                setDataToEdit={ setDataToEdit }
                deleteData={ deleteData }
            />
        </div>
    )
}


