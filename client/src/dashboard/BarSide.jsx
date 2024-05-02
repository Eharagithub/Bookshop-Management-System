import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiBookmarkAlt, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";


const BarSide = () => {
    return (
        <Sidebar aria-label="Sidebar with content separator example">
            {/* <Sidebar.Logo href="#" img="https://assets.localretailconnect.com/rw-assets/northlandbookstore.com/17703/logo.png" imgAlt="Flowbite logo" style={{ height: "50% !important" ,width:"110%" }}> */}
            <Sidebar.Logo href="#" img="https://assets.localretailconnect.com/rw-assets/northlandbookstore.com/17703/logo.png" >

            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
                        Uploard Book
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/manage" icon={HiViewBoards}>
                        Manage Book
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/edit-book/:id" icon={HiBookmarkAlt}>
                        Edit Book
                    </Sidebar.Item>
                    <Sidebar.Item href="/login" icon={HiArrowSmRight}>
                        Sign In
                    </Sidebar.Item>
                    <Sidebar.Item href="/logout" icon={HiTable}>
                        Log Out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                {/* <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        Upgrade to Pro
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiViewBoards}>
                        Documentation
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={BiBuoy}>
                        Help
                    </Sidebar.Item>
                </Sidebar.ItemGroup> */}
            </Sidebar.Items>
        </Sidebar>
    )
}

export default BarSide