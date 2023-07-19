import { useEffect, useRef, useState } from "react";
// import { Cart } from "./components/Cart";
// import { Expandable } from "./components/Expandable";
// import { Form } from "./components/Form";
// import { NavBar } from "./components/NavBar";
// import { ExpenseFilter } from "./expense-tracker/components/ExpenseFilter";
// import ExpenseForm from "./expense-tracker/components/ExpenseForm";
// import { ExpenseList } from "./expense-tracker/components/ExpenseList";
// import categories from "./expense-tracker/categories";
// import { ProductList } from "./components/ProductList";
// import axios, { CanceledError } from "axios";
import { CanceledError } from "../src/services/api-clients";
import useUsers from "./hooks/use-users";
import userService, { Users } from "./services/user-service";

// export const categories = ["Utilities","Groceries","Entertainment"];
function App() {

  const {setError,setUsers,users,error,isloading} = useUsers();
  const addUser = () => {
    const newUser = { id: users.length + 1, name: "Ace" };
    setUsers([...users, newUser]);

    userService.add(newUser).then((res) => setUsers([res.data, ...users]));
  };
  const deleteUser = (user: Users) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user).catch((err) => {
      setError(err.message), setUsers(originalUsers);
    });
  };
  const updateUser = (user: Users) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isloading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
//----------------------------------------------------------------------------------------------
// const connect = () => console.log('Connecting')
// const disconnect = () => console.log('Disconnecting')
// const ref =  useRef<HTMLInputElement>(null);
// const [category, setCategory] = useState('')

// // useEffect(()=>{

// //   if (ref.current) ref.current.focus();

// // });

// useEffect(()=>{
//   connect();

//   return () => disconnect();
//   // document.title = 'My React-App'
// })

// return(
//   <div>
//       <select className="form-select" onChange={(event) => setCategory(event.target.value)}>
//         <option value=""></option>
//         <option value="Clothing">Clothing</option>
//         <option value="Household">Household</option>
//       </select>
//     <ProductList category={category}/>
//     {/* <input ref= {ref} type="text" className="form-control" /> */}
//   </div>
// );
//---------------------------------- Expense Filter ------------------------------------------------------------

// const [selectedCategory, setSelectedCategory] = useState("");
// const [expenses, setExpenses] = useState([
//   { id: 1, description: "aaa", amount: 10, category: "Utilities" },
//   { id: 2, description: "bbb", amount: 10, category: "Groceries" },
//   { id: 3, description: "ccc", amount: 10, category: "Utilities" },
//   { id: 4, description: "ddd", amount: 10, category: "Entertainment" },
// ]);
// const visibleExpenses = selectedCategory
//   ? expenses.filter((e) => e.category === selectedCategory)
//   : expenses;

// return (
//   <>
//     <div>
//       <div className="mb-5">
//         <ExpenseForm onSubmitData={(expense)=>setExpenses([...expenses,{...expense,id:expenses.length+1}])}/>
//       </div>
//       <div className="mb-3">
//         <ExpenseFilter
//           onSelectCategory={(category) => setSelectedCategory(category)}
//         />
//       </div>
//       <ExpenseList
//         expenses={visibleExpenses}
//         onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
//       />
//     </div>
//   </>
// );
//----------------------------------------------------------------------------------------------

// const [len,setLen] = useState(100)

// const [cartItems,setCartItems] = useState(['Prod1','Prod2','Prod3'])
// const [game,setGame] = useState({
//   id:1,
//   player:{
//     name:"John"
//   }
// })

// const handleClick=()=>{
//   setGame({
//     ...game,
//     player:{name:"Mosh"}
//   });

// }
