
interface CartProps{
    cartItems : string[],
    onClear :()=>void
};

export const Cart = ({cartItems,onClear}:CartProps) => {
  return (

    <>
    <div>
        <div>Carts</div>
        <ul>
            {cartItems.map(items => <li key={items}>{items}</li>)}
        </ul>   
        <button onClick={onClear}>Clear</button>
    </div>
    </>
  )
}
