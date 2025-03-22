// import { useState } from "react";
// import Chats from "./components/Chats";
// import User from "./components/User";
// import 'bootstrap/dist/css/bootstrap.min.css';
// export interface User {
//    id:number,
//    name:string,
//    phone:string
// }

// export default function App() {

//   const [user,setuser]=useState<User[]>([
//     {id:1,name:'Save message',phone:'+998946758343'},
//     {id:2,name:'Jamshid',phone:'+998936453784'},
//     {id:3,name:'Ali',phone:'+998975943239'}
// ])

// function addusers(us:User){
//   user.push(us)
//   setuser([...user])
// }

//   return (
//     <div className="wrap">
//       <Chats chatuser={user}/>
//       <User addusers={addusers} users={user}/>
//     </div>
//   );
// }


import { useState } from "react";
import Chats from "./components/Chats";
import User from "./components/User";
import "bootstrap/dist/css/bootstrap.min.css";

export interface User {
  id: number;
  name: string;
  phone: string;
}

export default function App() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Save message", phone: "+998946758343" },
    { id: 2, name: "Jamshid", phone: "+998936453784" },
    { id: 3, name: "Ali", phone: "+998975943239" },
  ]);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  function addUser(us: User) {
    setUsers([...users, us]);
  }

  return (
    <div className="wrap">
    
      <User addUsers={addUser} users={users} onSelectUser={setSelectedUser} />
      {selectedUser ? <Chats chatUser={selectedUser} /> : <p>Chat uchun foydalanuvchi tanlang</p>}
    </div>
  );
}

