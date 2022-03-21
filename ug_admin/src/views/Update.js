import React from 'react'
import axios from 'axios';

function Update() {
const submitHandler=(event)=>{
    event.preventDefault();
    const id = event.target.id.value;
        const name = event.target.name.value;
        const author = event.target.author.value;
        const title = event.target.title.value;
        const decription = event.target.decription.value;
        const url = event.target.url.value;
        const urlToImage = event.target.urlToImage.value;
        const publishedAt = event.target.publishedAt.value;
        const content = event.target.content.value;
axios.post("http://localhost:3000/articles",{
    id:"", name:"", author:"", title:"", decription:"", url:"", urlToImage:"", publishedAt:"", content:""
}).then((response)=>{
    console.log(response);
    event.target.reset();
})
.catch((error)=>{
    console.log(error);
})
}
  return (
    <div className='content'>
        

            <form   onSubmit={submitHandler}>

            <div classNameName="form-group">
            <label for="id">Id</label>
                <input  id="id" placeholder=' enter id' className="form-control" type="text" name="id"></input>
                </div>


             <div classNameName="form-group">
                    <label>Name </label>
                <input  id="name" placeholder='enter name' className="form-control" type="text" name="name"></input>
                </div>
            <div classNameName="form-group">
                    <label>Name </label>
                <input  id="name" placeholder='enter name' className="form-control" type="text" name="name"></input>
                </div>

                <div classNameName="form-group">
                    <label>Author</label>
                <input  id="author"  placeholder='enter author' className="form-control" type="text" name="author"></input></div>

                <div classNameName="form-group">
                    <label>Title </label>
                <input  id="title"  placeholder='enter title' className="form-control" type="text" name="title"></input></div>



                <div classNameName="form-group">
                    <label>Decription </label>
                <input  id="decription"  placeholder='enter decription' className="form-control" type="text" name="decription"></input></div>

                <div classNameName="form-group">
                    <label>URL </label>
                <input  id="url"  placeholder='enter url' className="form-control" type="text" name="url"></input></div>


                <div classNameName="form-group">
                    <label>UrlToImage </label>
                <input  id="urlToImage"  placeholder='enter UrlToImage' className="form-control" type="text" name="decription"></input></div>


                <div classNameName="form-group">
                    <label>publishedAt </label>
                <input  id="publishedAt"  placeholder='enter publishedAt' className="form-control" type="text" name="publishedAt"></input></div>


                <div classNameName="form-group">
                    <label> content </label>
                <input  id="content"  placeholder='enter content' className="form-control" type="text" name="content"></input></div>

                <button type="button" class="btn btn-primary btn-sm">Submit</button>
                <button type="button" class="btn btn-secondary btn-sm">Cancle</button>
            </form>
 </div>
  )

}
export default Update