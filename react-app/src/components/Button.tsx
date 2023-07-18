interface Props{
    children:string,
    color:string,
    onClick:()=>void;
}
export const MyButton = ({children,color, onClick}:Props) => {
    
  return (
    <> 
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
