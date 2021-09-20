import "./App.css";
import          axios          from "axios";
import { useEffect, useState } from "react";


const URL = 'https://gorest.co.in/public/v1/users';
const App = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get(URL).then(response => {
      console.log(JSON.stringify(response.data.data))
        setUser(response.data.data);
  });
}, []);


return (<div classname ="userDetails">
<table>
        <thead>
          <tr>
           <th>S.No</th>
            <th>EmpId</th>
            <th>Name</th>
            <th>Gender</th>
            <th>EMail</th>
            <th>Status</th>
            <th>Update</th>
        </tr>
        </thead>
        <tbody>
        {user.map((item) => (
           
           <tr>
             <td></td>
             <td>{item.id}</td>
             <td>{item.name}</td>
             <td>{item.gender}</td>
             <td>{item.email}</td>
             <td>{item.status}</td>
             <td><a href="!">Edit</a>  <a href="!" >Delete</a>
             </td>
           </tr>
         ))}
        </tbody>
  </table>


</div>)
};

export default App;