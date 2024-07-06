import "../../assets/index.css"
import CustomButton from "../../components/Button";
import TextField from "../../components/InputField";

const SignUp = () => {
    return <>
        <div className="w-screen flex items-center justify-center p-5">
            <div className="w-full min-h-screen flex items-start justify-center flex-col">
                <p>Create New Account</p>
                <p className="text-4xl">Lets log you in</p>
                <p>Already have an account? <span> Sign in</span></p>
                <TextField name='Phone Number' />
                <TextField name='Password' />
                <CustomButton name='Sign Up' />
            </div>
        </div>
    </>
}

export default SignUp;