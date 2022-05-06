import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function AgGrid (todos) {
    const columns = [
        { field: "description" },
        { field: "date" },
        { field: "priority" }
    ]

    return(
        <div className="ag-theme-material" style={{height: '400px', width: '60%', margin: 'auto'}} >
            <AgGridReact
                columnDefs={columns}
                rowData={todos}>
            </AgGridReact>
        </div>
    )
}

export default AgGrid;