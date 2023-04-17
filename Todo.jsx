import React, { useState } from "react";

function Todo(){
const[activity,setact] = useState();
const[listdata,setdata] = useState([]);

const event = (e)=>{
    setact(e.target.value);

};
function addactivity(){
    //setdata([...listdata,activity]);
   // console.log(listdata);
   setdata((listdata)=>{
    const updatelist = [...listdata,activity]
    console.log(updatelist)
    setact("");
    return updatelist;
   });

}
function remove(i){
    const updatelistdata = listdata.filter((elem,id)=>{
        return i!=id;
    })
    setdata(updatelistdata);

}

function removeall(){
    setdata([]);
}



    return(
        <>
<h1>Todo list</h1>
<input type="text"
placeholder="add"
value={activity}
    onChange={event}
/>
<button onClick={addactivity}>add</button>
<p>here is your list</p>
{listdata!=[] && listdata.map((data,i)=>{
    return(
        <>
            <p key={i}>
                <div className="listdata">{data}</div>
                <button onClick={()=>remove(i)}>remove</button>
            </p>
        </>
    )
    

})}
{listdata.length>=1 && <button onClick={removeall}>remove all</button>}



</>
    )
}
 export default Todo;