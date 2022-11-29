import React from 'react';
//import "./kosar.css";


function Kosar(props) {
    return(
     /*  <table class="table table-striped">
        <thead>
            <tr>
                <th>
                    Cím
                </th>
                <th>
                    Szerző
                </th>
                <th>
                    Ár
                </th>
            </tr>
        </thead>*/
        
            <tr>
                <td>
                    {props.kosar.cim}
                </td>
                <td>
                    {props.kosar.szerzo}
                </td>
                <td>
                    {props.kosar.ar}
                </td>
            </tr>
        
        //</table>
    );
}






export default Kosar;