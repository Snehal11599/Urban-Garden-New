import React,{useState,useEffect}from 'react';
import MaterialTable from 'material-table';
import { DataGrid } from '@mui/x-data-grid';

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
];

function Material_Table() {
    const url=""
    const [data, setData] = useState([])

    useEffect(()=>{
        getData()
    },[])
    const getData=()=>{
        fetch(url).then(resp=>resp.json())
        .then(resp=>setData(resp))
    }
 return (
    <div className='app'>
        <h1 align='center'>React-app</h1>
        <h4 align="center">Matreial table</h4>
        <DataGrid
        title="data"
        data={data}
        column={columns}
        />

      
    </div>
  )
}

export default Material_Table
