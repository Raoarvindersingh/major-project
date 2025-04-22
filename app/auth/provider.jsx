import { UserDetailContext } from '@/context/userDetailContext';
import { supabase } from '@/services/supabaseclient';
import { Equal } from 'lucide-react'
import React, { useContext ,useEffect, usestate } from 'react'

function Provider({children}) {
       
    const [user, setUser]= useState();
    useEffect(()=> {
        CreateNewUser();
    }
    )
    const CreateNewUser= () => {

        supabase.auth.getUser().then(async({ data: {user} })=>{
            let { data: Users, error } = await supabase
  .from('Users')
  .select("*")
  .eq('email',user?.email); 
     
      console.log(Users)
      if(Users?.length==0)
      {
       const { data, error }= await supabase.from("Users")
        .insert([
               {
                name:user?.user_metadata?.name,
                email:user?.email,
                picture:user?.user_meradata?.picture
               }
             ])
             console.log(data);
             setUser(data);
             return;
      }

      setUser(Users);
    })
    }
    return(
        <UserDetailContext.Provider value={{}}> <div>{children}</div>
        </UserDetailContext.Provider>
    )
}
export default Provider

export const useUser=()=>{
    const context=useContext(UserDetailcontext);
    return context;
}