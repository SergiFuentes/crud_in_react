import React, { useState, useEffect } from 'react';

const initialForm = {
    name: '',
    email: '',
    id: null,
};

export const CrudForm = ( { createData, updateData, dataToEdit, setDataToEdit } ) =>
{
    const [ form, setForm ] = useState( initialForm );
    
    useEffect( () =>
    {
        if ( dataToEdit ) 
        {
           setForm( dataToEdit );
        }
        else
        {
            setForm( initialForm ); 
        }
    }, [dataToEdit] );

    const handleChange = ( e ) =>
    {
        setForm( {
            ...form, [e.target.name]:e.target.value,
        })
    }
    
    const handleSubmit = ( e ) =>
    {
        e.preventDefault();

        if (!form.name || !form.email) {
            alert( 'Incomplete data' );
            return;
        }
        if (form.id === null) {
            createData(form);
        } else
        {
            updateData( form );
        }

        handleReset();
         
    }
    
    const handleReset = ( e ) =>
    { 
        setForm( initialForm );
        setDataToEdit( null );
    }
     
    return (
        <div>
            <h3>{dataToEdit? "Edit":"Add"}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Name' onChange={handleChange} value={form.name}/>
                <input type="email" name='email' placeholder='email' onChange={handleChange} value={form.email}/>
                <input type='submit' value='send' />
                <input type='reset' value='clear' onClick={handleReset} />
                

            </form>

        </div>
    )
}
