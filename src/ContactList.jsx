import React from 'react';
import Axios from 'axios';
const ContactList = ({ List,setList,fetch}) => {

    console.log(List);
    const handleDelete=(e)=>
    {
        Axios.delete("http://localhost:3000/delcontact/"+e).then(success=>
        {
           alert("successfully deleted Id num:"+e);
           setList(List.filter(i=>i._id!==e));

        
           
        })
    }
    const handleUpdate=(uid)=>
    {
        var updname=prompt("Enter your Name to be updated:");
        var updphone=prompt("Enter your PhNum to be updated:");
        var updmail=prompt("Enter your Mail to be updated:");

        Axios.put("http://localhost:3000/updcontact/"+uid,{Name:updname,Phone:updphone,Email:updmail}).then(success=>
        {
            
            setList(List.map(i=>i._id===uid?[...List,success.data]:List))
            fetch();
            alert("updated");
           
            // setList(List.)
        })
    }
    

    return (

        <div>
            
                    <table class="table">
                        <thead class="table-dark">
                            <tr>
                                <th  scope="col">Name</th>
                                <th  scope="col">Ph_Num</th>
                                <th  scope="col">Email</th>
                                <th  scope="col">Click</th>
                                
                            </tr>

                        </thead>
                        <tbody class= "table-secondary">
                        {
                        List.map((i) => {
                            return (<tr key={i._id}>  
                                <td>{i.Name}</td>
                                <td>{i.Phone}</td>
                                <td>{i.Email}</td>
                                <button onClick={handleDelete.bind(this,i._id)}>Delete</button><span>{" "}</span>
                                <button onClick={handleUpdate.bind(this,i._id)}>Update</button>
                                </tr>
                                )
                        })
                    }
                        </tbody>
                    </table>
               
        </div>


    )

    

}

export default ContactList;