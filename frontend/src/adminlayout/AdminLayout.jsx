import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/adminComponents/AdminNavbar";

export default function AdminLayout(){
    return (
        <>
        <AdminNavbar/>
        <Outlet/>
        </>
    )
}
