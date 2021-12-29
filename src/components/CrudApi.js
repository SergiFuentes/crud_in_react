import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { Loader } from "./Loader";
import { Messaje } from "./Messaje";

export const CrudApi = () => {
    const [db, setDb] = useState(null);
    const [ dataToEdit, setDataToEdit ] = useState( null );

    const [ error, setError ] = useState( null );
    const [ loading , setLoading ] = useState( false );
        
    let api = helpHttp();
    let url = "http://localhost:5000/user";
    
    useEffect( () =>
    {
        setLoading( true );
        api.get( url ).then( ( res ) =>
        { //console.log( res ) } );
            if ( !res.err )
            {
                setDb( res );
                setError( null );
            } else
            {
                setDb( null );
                setError( res );

            }
            setLoading( false );
        } );
    },[] );
  
    const createData = ( data ) =>
    {
        data.id = Date.now();
        //console.log( data );
        setDb( [ ...db, data ] );
    };

    const updateData = ( data ) =>
    {
        let newData = db.map( ( el ) => ( el.id === data.id ? data : el ) );
        setDb( newData );
    };

    const deleteData = ( id ) =>
    {
        let isDelete = window.confirm(
            `¿Are you sure to delete the register with id '${ id }'`
        );

        if ( isDelete )
        {
            let newData = db.filter( ( el ) => el.id !== id );
            setDb( newData );
        }
    };

    return (
        <div>
            <h2>CRUD Api</h2>
            <article className="grid-1-2">
                <CrudForm
                    createData={ createData }
                    updateData={ updateData }
                    dataToEdit={ dataToEdit }
                    setDataToEdit={ setDataToEdit }
                />
                { loading && <Loader /> }
                {error && <Messaje/> }
                { db && <CrudTable
                    data={ db }
                    setDataToEdit={ setDataToEdit }
                    deleteData={ deleteData }
                /> }
                
                
            </article>
        </div>
    );
};
