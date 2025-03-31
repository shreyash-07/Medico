import { createContext } from "react";


export const AdminContext = createContext();

const AdminContextPorvider = (props)=>{
    const value = {

    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextPorvider