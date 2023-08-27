import SignInForm from "../components/SignInForm";
import BigLogo from "../assets/BigLogo.png"

const SignInPage = () => { 
    return (
        <div className=" flex flex-col space-y-8">
            <div className="block">
                <button className="rounded-6xs 
                    float-right mr-8 mt-5 bg-salmon-100 text-white  w-[100px] h-[50px] text-lg
                    font-semibold cursor-pointer">
                    Sign Up
                </button>
            </div>
            <div className="mx-[30%]">
                <img src={BigLogo} className="mx-[25%] w-36" />
                <h2 className="font-semibold mx-[10%] text-gray-100 text-2xl">
                    Sign In into your account
                </h2>
            </div>
            <SignInForm />
        </div>
    )
}

export default SignInPage;
