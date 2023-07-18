import { useRef } from "react";
import { FieldValues, useForm} from "react-hook-form"

{
  /* Shortcut to create form is : div.mb-3>label.form-label+input.form-control 'press tab' */
}

interface FormData{
  name: string,
  age: number
}
export const Form = () => {
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const person = { name:'',age:0}
  const {register,handleSubmit, formState: {errors, isValid}} = useForm<FormData>();
  const onSubmit = (data:FieldValues) => console.log(data);
  // const form: useForm();
 
  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input {...register('name',{required:true,minLength:3})} id="name" type="text" className="form-control" />
        {errors.name?.type === 'required' &&  <p className="text-danger">This field is required!</p>}
        {errors.name?.type === 'minLength' && <p className="text-danger">Minimum 3 characters required</p>}
      </div>
      <div className="mb3">
        <label htmlFor="age" className="form-label">Age</label>
        <input {...register('age',{required:true})} id="age" type="number" className="form-control" />
        {errors.name?.type==='required' && <p className="text-danger" >Age is required</p>}
      </div>
     <button disabled={!isValid} id="formSubmit" className="btn btn-primary" type="submit">Submit</button> 
    </form>
  );
};

// export const Form = () => {
//   const nameRef = useRef<HTMLInputElement>(null);
//   const ageRef = useRef<HTMLInputElement>(null);
//   const person = { name:'',age:0}
//   const form = useForm();
//   // const form: useForm();
//   console.log(form)
//   return (
//     <form onSubmit={(event)=>{
//         event.preventDefault()
//         if(nameRef.current){
//           console.log(nameRef.current?.value);
//           person.name = nameRef.current.value;
//         }
//         if(ageRef.current){
//           console.log(ageRef.current.value);
//           person.age = parseInt(ageRef.current.value);
//         }
//         console.log('Person with name and age: ',person);
//         // console.log('Submitted')
        
//         }}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input ref = {nameRef} id="name" type="text" className="form-control" />
//       </div>
//       <div className="mb3">
//         <label htmlFor="age" className="form-label">Age</label>
//         <input ref={ageRef} id="age" type="number" className="form-control" />
//       </div>
//      <button id="formSubmit" className="btn btn-primary" type="submit">Submit</button> 
//     </form>
//   );
// };


// another way to handle:


// export const Form = () => {
    // const handleSubmit = (event:FormEvent)=>{
    //   event.preventDefault();
    //   console.log('Submitted');
    // }
//   return (
//     <form onSubmit={ handleSubmit }
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input id="name" type="text" className="form-control" />
//       </div>
//       <div className="mb3">
//         <label htmlFor="age" className="form-label">Age</label>
//         <input id="age" type="number" className="form-control" />
//       </div>
//      <button id="formSubmit" className="btn btn-primary" type="submit">Submit</button> 
//     </form>
//   );
// };