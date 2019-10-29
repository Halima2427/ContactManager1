import React from 'react';
import Axios from 'axios';
import ContactList from './ContactList';
const AppC=()=>
{
  const [name,setInput1]=React.useState("");
  const [number,setInput2]=React.useState();
  const [email,setInput3]=React.useState("");
  const [list,setList]=React.useState([]);
  const fetch=()=>
  {
    Axios.get("http://localhost:3000/getcontact").then(success=>{
      //console.log(success.data);
      setList(success.data);
    })
  }
  React.useEffect(()=>{fetch()},[])
 
  
  //const [addCon,setAddCon]=React.useState([]);
  const handleChange1=(e1)=>
  {
    setInput1(e1.target.value)

    
  }
  const handleChange2=(e2)=>
  {
    setInput2(e2.target.value)
  }
  const handleChange3=(e3)=>
  {
    setInput3(e3.target.value)
  }
  const handleClick=(name,number,email)=>
  {
     Axios.post("http://localhost:3000/postcontact",{Name:name,Phone:number,Email:email}).then(success=>
     {
      console.log(success.data);
      setList([...list,success.data]);
      fetch();
      setInput1("");
      setInput2("");
      setInput3("");
     })
   
  }

  return(
  <div>
    <table class="table">
      
      <tbody  >
        <tr><th class="table-dark">NAME:</th><td class="table-secondary"><input onChange={handleChange1} value={name} /></td></tr>
        <tr><th class="table-dark">PHONE_NUM:</th><td class="table-secondary"><input onChange={handleChange2} value={number}/></td></tr>
        <tr><th class="table-dark">EMAIL:</th><td class="table-secondary"><input onChange={handleChange3} value={email}/></td></tr>
        </tbody><br></br>
        <button onClick={()=>{handleClick(name,number,email)}} class="btn btn-dark">ADD_CONTACT</button>
        
      
    </table><br></br>
  
  <ContactList List={list} setList={setList} fetch={fetch}/>
  </div> 
  )
}
export default AppC;


