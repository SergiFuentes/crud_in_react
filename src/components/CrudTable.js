import React from 'react'
import { CrudTableRow } from './CrudTableRow'

export const CrudTable = ({data}) => {
    return (
        <div>
            <h3>Data Table</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>email</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    { data.length === 0 ? ( <tr><td colSpan="3">Without DATA</td></tr> ) : ( data.map( ( el ) => <CrudTableRow key = { el.id } el = { el } />))}
                </tbody>
            </table>
        </div>
    )
}
