import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-clients";
import userService, { Users } from "../services/user-service";

const useUsers = () => {
    const [users, setUsers] = useState<Users[]>([]);
    const [error, setError] = useState("");
    const [isloading, setIsLoading] = useState(false);
    useEffect(() => {
      setIsLoading(true);
      const { request, cancel } = userService.getAll<Users>();
      request
        .then((res) => {
          setUsers(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });
  
      return () => cancel();
      // .then(res => console.log(res.data[0].name))
    }, []);
    return {  users, setUsers , error,setError, isloading,} ;
}

export default useUsers;