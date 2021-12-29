import React from 'react';

export const CrudTableRow = ( { el, setDataToEdit, deleteData } ) =>
{
    let { name, email, id } = el;
    
    return (
        <tr>
            <td>{ name }</td>
            <td>{ email }</td>
            <td>
                <button onClick={()=> setDataToEdit(el)}>Edit</button>
                <button onClick={()=> deleteData(id)}>Delete</button>
            </td>
        </tr>  
    )
}
