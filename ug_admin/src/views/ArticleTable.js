import  React, {useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {  Button } from "@material-ui/core";

import Edit from './Edit';


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'author', headerName: 'Author', width: 130 },
    { field: 'title', headerName: 'TITLE', width: 130 },
    { field: 'desp', headerName: 'DESCRIPTION', width: 130 },
    { field: 'url', headerName: 'URL', width: 130 },
    { field: 'urlToImage', headerName: 'URL_TO_IMAGE', width: 130 },
    { field: 'publishedAt', headerName: 'PUBLISH_AT', width: 130 },
    { field: 'content', headerName: 'CONTENT', width: 130 },

    
,{
    field: "Edit",
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={<Edit/>}
        >
          EDIT
        </Button>
      );
    }
  },{
    field: "Delete",
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
          
        >
          DELETE
        </Button>
      );
    }
  }
 
];



export default function ArticleTable() {
    const url="http://localhost:3001/articles"
    const [data, setData] = useState([])

    useEffect(()=>{
        getData()
    },[])
    const getData=()=>{
        fetch(url).then(resp=>resp.json())
        .then(resp=>setData(resp))
    }
  return (
    <div className='content' style={{ height: 400, width: '100%' }}>
            Table
      <DataGrid
        rows={data}
        columns={columns}
        editable={{
            onRowAdd:(newdata)=>new Promise((resolve,reject)=>{
                console.log(newdata)
            })
        }}
        pageSize={11}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
     
    </div>
  );
}
