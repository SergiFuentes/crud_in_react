import React, { useState, useEffect } from 'react';

const initialForm = {
    name: '',
    email: '',
    id: null,
};

export const CrudForm = () =>
{
    const [ form, setForm ] = useState(  initialForm );

    const handleChange = ( e ) => { }
    
    const handleSubmit = ( e ) => { }
    
    const handleReset = ( e ) => { }
     
    return (
        <div>
            <h3>Add</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Name' onChange={handleChange} value={form.name}/>
                <input type="email" name='email' placeholder='email' onChange={handleChange} value={form.email}/>
                <input type='submit' value='send' />
                <input type='reset' value='clear' onClick={handleReset} />
                

            </form>

        </div>
    )
}
