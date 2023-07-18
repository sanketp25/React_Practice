
interface NavProps{
    cartItemCount:number
}
export const NavBar = ({cartItemCount}:NavProps) => {
  return (
    <>
        <div>NavBar: {cartItemCount}</div>
    </>

  )
}
