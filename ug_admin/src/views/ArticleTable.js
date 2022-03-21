import  React, {useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {  Button } from "@material-ui/core";
import axios from 'axios'
import {Link} from 'react-router-dom'
export default function ArticleTable() {
    const url="http://localhost:3000/articles"
    const [data, setData] = useState([])
    const [isEdit,setEdit]=useState(false)
useEffect(()=>{
        getData()
    },[])
    const getData=()=>{
        fetch(url).then(resp=>resp.json())
        .then(resp=>setData(resp))
    }
const onDelete = (id) => {
        axios.delete(`http://localhost:3000/articles/${id}`)
     .then(() => {
        setData(); 
    })
}
const handleEdit=(i)=>{
  setEdit(!isEdit);
};


const editData=(id)=>{
  console.log(id)
  let newEditItem=data.find((element)=>
  {
    return element.id===id;
  })
  setEdit(!isEdit);
  console.log(newEditItem);
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
    {
       field: "Edit",
        renderCell: (cellValues) => {
          return (
            <Link to='Edit'>
            <Button
              variant="contained"
              color="primary"
             onClick={()=>editData(data.id)}
             >
              EDIT
            </Button>
            </Link>
          );
        }
      },
    {
        field: "Delete",
        renderCell: (params) => {
          return (
            <Button
              variant="contained"
              color="primary"
              onClick={()=>onDelete(params.id)}
            >
              DELETE
            </Button>
          );
        }
      }
     
    ];
    


return (
    <div className='content' style={{ height: 400, width: '100%' }}>
       <Link to='Add_Articles'>
       <Button  variant="contained"
              color="primary"r
             
> Create Articles !!..</Button>
      </Link>
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
