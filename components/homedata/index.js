import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const DataList = (props) => {
    const {products, addToCart} = props
    return (
        <div 
            className="ag-theme-alpine" 
            style={{height: 470, width: '100%', marginTop: 10}}>
           <AgGridReact
               rowData={products}
               pagination="true"
               paginationAutoPageSize="true"
               rowSelection="single"
               onRowClicked={(e) => addToCart(e.data)}
            >
               <AgGridColumn field="barcode" width={120}></AgGridColumn>
               <AgGridColumn field="name" width={230}></AgGridColumn>
               <AgGridColumn field="price" width={100}></AgGridColumn>
               <AgGridColumn field="stock" width={100}></AgGridColumn>
           </AgGridReact>
       </div>
    )
}

export default DataList
