import logo from './logo.svg';
import './App.css';
// import { BrowserRouter } from 'react-router-dom';
import {Routes, Route, Link} from "react-router-dom"
import CreateUser from './component/createuser/CreateUser';
import UpdateUser from './component/updateuser/UpdateUser';
import EditUser from './component/edituser/EditUser';

function App() {
  return (

    <div className="App">
      <h1>react app page</h1>
      <table>
        <ul>
          <li>
            <Link to={'/'}>Create User</Link>
          </li>
          <li>
          <Link to='/updateuser'>Update User</Link>
          </li>
          <li>
          {/* <Link to='user/:id/edit'>Edit User</Link> */}

          </li>
        </ul>
      </table>

      {/* <BrowserRouter> */}
      <Routes>
        <Route index element={<CreateUser/>}/>
        <Route path='user/:id/edit' element={<EditUser/>}/>
        <Route path='/updateuser' element={<UpdateUser/>}/>
      </Routes>
    {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
