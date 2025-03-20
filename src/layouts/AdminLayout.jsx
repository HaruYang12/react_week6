import { Outlet} from "react-router-dom";
import AdminHeader from "../components/common/AdminHeader";




export default function AdminLayout () {



    return (
    <>
        <AdminHeader />
        <Outlet />
    </>
    )
}