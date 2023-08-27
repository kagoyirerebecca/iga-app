import SmallLogo from "../assets/SmallLogo.png"
import CoursesIcon from "../assets/CoursesIcon.png"
import UploadIcon from "../assets/UploadIcon.png"
import UserIcon from "../assets/UserIcon.png"
import SignoutIcon from "../assets/SignOutIcon.png"


const DashboardLayout = (props) => {
    return (
        <div className="bg-salmon-100 w-full h-screen overflow-hidden">
            <div className="float-left w-[15%]">
                <div className=" flex flex-col flex-nowrap px-4 py-8 space-y-8 h-full">
                    <img src={SmallLogo} className="w-20 ml-10" />
                    <div className="flex flex-col space-y-1 ">
                        <div className="w-32 p-2 mx-auto rounded-6xs hover:bg-lightcoral h-[40px] cursor-pointer">
                            <img src={CoursesIcon} className="w-6 mt-0 inline-block"/>
                            <a className="inline-block text-base align-top mt-1 ml-2">Courses</a> 
                        </div>
                        <div className="w-32 p-2 mx-auto rounded-6xs hover:bg-lightcoral h-[40px] cursor-pointer">
                            <img src={UploadIcon} className="w-6 inline-block"/>
                            <a className="inline-block text-base align-top mt-1 ml-2">Upload</a> 
                        </div>
                    </div>
                    
                
                </div>
                
                <div className="absolute bottom-8 left-6">
                    <div className="w-32 p-2 mx-auto rounded-6xs hover:bg-lightcoral h-[40px] cursor-pointer">
                        <img src={UserIcon} className="w-6 mt-0 inline-block"/>
                        <a className="inline-block text-base align-top mt-1 ml-2">Username</a> 
                    </div>
                    <hr className=" box-border w-[140px] h-0.5 border-t-[2px] border-solid border-lightgray-200"></hr>
                    <div className="w-32 p-2 mx-auto rounded-6xs hover:bg-lightcoral h-[40px] cursor-pointer">
                        <img src={SignoutIcon} className="w-5 mt-0.5 inline-block"/>
                        <a className="inline-block text-base align-top mt-1 ml-2">Sign Out</a> 
                    </div>
                </div>
                    
            </div>
            
            <div className="float-right w-[83%] min-h-[98%] bg-white my-[5px]  mr-[5px] rounded-xl">
                {props.children}
            </div>
        </div>

    )
 }

export default DashboardLayout;