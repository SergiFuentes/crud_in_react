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

    const updateData = ( data ) =>
    {
        let newData = db.map( el => el.id === data.id ? data : el );
        setDb( newData );
     };

    const deleteData = ( id ) =>
    {
        let isDelete = window.confirm( `¿Are you sure to delete the register with id '${ id }'` );

        if ( isDelete )
        {
            let newData = db.filter( el => el.id !== id );
            setDb( newData );
        }
    };

    return (
        <div>
            <h2>CRUD App</h2>
            <CrudForm
                createData={ createData } updateData={ updateData } dataToEdit={ dataToEdit } setDataToEdit={ setDataToEdit }
            />
            <CrudTable
                data={ db }
                setDataToEdit={ setDataToEdit }
                deleteData={ deleteData }
            />
        </div>
    )
}


