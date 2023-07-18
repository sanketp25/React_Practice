import { useState } from "react";
import { Alert } from "./components/Alert";
import { MyButton } from "./components/Button";
import { Like } from "./components/Like";

import ListGroup from "./components/ListGroup";
import { Expandable } from "./Expandable";

function App() {
  // let items = ["New York", "Paris", "Mumbai", "Tokyo", "London"];
  // const handleSelectItem= (item:string)=>{
  //   console.log(item)
  // }
  const [alert,setAlert] = useState(false);

  return (
    <div>
      <Like onClick={()=>console.log('Clicked')}></Like>
      {/* {alert && <Alert onClose={()=>setAlert(false)}>Alerted</Alert>}
      {/* <ListGroup items={items} heading="Places to visit" onSelectItem={handleSelectItem}></ListGroup> */}
      {/* <MyButton
        color="danger"
        children="MyButton"
        onClick={() => setAlert(true)}
      ></MyButton> */}
       
    </div>
  );
}

export default oldApp;
// -------------------------------------------------------------(Navbar+Cart)-----------------------------------------------------------------------------------------------
// This is the navbar and the cart component in which the value of the navbar changes

{/* <div>
      <NavBar cartItemCount= {cartItems.length}/>
      <Cart cartItems={cartItems} onClear={()=>setCartItems([])}/>
    </div> */}
// ----------------------------------------------------------(Expandable)--------------------------------------------------------------------------------------------------    
// This is the Expandable component wherein we click on more to read the full text and less to read the summary

{/* <div>
<Expandable maxChars={10}>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia explicabo cupiditate ipsa nemo dolore repellendus est quod culpa eius expedita, sint ab ea perferendis obcaecati dignissimos temporibus quisquam earum voluptatibus error placeat dolorum dolores? Velit tempore consequuntur officia hic, eveniet inventore expedita doloribus adipisci sequi! Sit iste consequatur voluptates voluptatum quibusdam ipsum, nihil et perferendis labore odio voluptatem magnam, eveniet ratione eius animi culpa, pariatur impedit adipisci sed maiores ad. In quos, voluptatibus ratione at, quibusdam, distinctio perspiciatis tempore doloremque nobis soluta temporibus dolore dignissimos sunt beatae consequatur unde harum? Magni delectus laboriosam cupiditate nihil iure provident nobis, incidunt eveniet?
</Expandable>
</div> */}


