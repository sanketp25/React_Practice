import { useState } from "react"
interface Props{
    children:string;
    maxChars?:number;
}
export const Expandable = ({children,maxChars=100}:Props) => {
    const [isExpanded,setIsExpanded] = useState(false)


    if(children.length<=maxChars)
        return (
            <div>
                {children}
            </div>
        )
        
    const text = isExpanded ? children: children.substring(0,maxChars)
    return(
        <div>{text}...<button onClick={()=> setIsExpanded(!isExpanded)}>{(isExpanded) ? 'Less':'More'}</button> </div>
    )    
}
 