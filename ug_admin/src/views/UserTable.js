import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'
// import FormDialog from './dialog';
import { Button } from '@material-ui/core';


const  HandleDelete=(id) =>{
  let url='http://localhost:3001/articles/'+id;
  fetch(url)
  .then(resp=>resp.json())
  .then(resp=>UserTable())
}
const columns = [
    { field: 'id', headerName: 'ID', width: 70 , },
    { field: 'name', headerName: 'Name', width: 130, editable:true},
    { field: 'author', headerName: 'Author', width: 130 ,editable:true,},
    { field: 'title', headerName: 'TITLE', width: 130 ,editable:true},
    { field: 'desp', headerName: 'DESCRIPTION', width: 130,editable:true },
    { field: 'url', headerName: 'URL', width: 130 },
    { field: 'urlToImage', headerName: 'URL_TO_IMAGE', width: 130,editable:true },
    { field: 'publishedAt', headerName: 'PUBLISH_AT', width: 130,editable:true, },
    { field: 'content', headerName: 'CONTENT', width: 130 ,editable:true},
    {field:'ActionFORDElete',
    headerName:'DeleteAction',
    renderCell: (params) => {
       return (
        <button 
        color="secondary"
        variant="contained"
        onClick={()=>HandleDelete(params.id)}
        >Delete</button>
        
       );
       }
    },{field:'Action',
    headerName:'UpdateAction',
    renderCell: (params) => {
       return (
        <button 
        color="secondary"
        variant="contained"
        //onClick={()=>HandleUpdate(params.id)}
        > Update</button>
        
       );
       }
    }
]

const UserTable = () => {
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/articles")
            .then((data) => data.json())
            .then((data) => setTableData(data))}
          )
          const [open, setOpen] = React.useState(true);
          const [formData ,setFormData] = useState({id:"" ,name:"",author:"",title:"",desp:"",url:"",urlToImage:"",publishedAt:"",content:""})
          const handleClickOpen = () => {
         setOpen(true);
   };

  const handleClose = () => {
    setOpen(false);
  };
return (
        <div style={{ height: 700, width: '100%' }}>
            <h2>This is user table</h2>
            <Button onClick = {handleClickOpen}>Add user</Button>
            <DataGrid
                rows={tableData}
                columns={columns}
                pageSize={10}
                checkboxSelection /> ,  
                {/* <FormDialog open={open} handleClose={handleClose} data={formData}/> */}
                
        </div>
    )
}
export default UserTable
