const SignInForm = () => { 
    return (
        <div className="flex flex-col space-y-8 mx-[30%]">
            <label className="text-base">
                Email
                <input type="email" className=" block mt-2 rounded-6xs bg-white box-border w-[393px] h-[50px] border-[2px] border-solid border-lightgray-100 text-base outline-none" />
            </label>
            <label className="text-base">
                Password
                <input type="password" className=" block mt-2 rounded-6xs bg-white box-border w-[393px] h-[50px] border-[2px] border-solid border-lightgray-100 text-base outline-none" />
            </label>
            <button className="rounded-6xs bg-salmon-100 text-white  w-[393px] h-[50px] text-lg font-semibold cursor-pointer">
                Sign In
            </button>
        </div>
    )


}

export default SignInForm;
