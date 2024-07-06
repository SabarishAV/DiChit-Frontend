import "../../assets/index.css"
import CustomButton from "../../components/Button";
import InputField from "../../components/InputField";

const SignIn = () => {
    return (
        <div className="w-screen flex items-center justify-center p-5">
            <div className="w-full min-h-screen flex items-start justify-center flex-col">
                <p>Welcome Back</p>
                <p className="text-4xl">Lets log you in</p>
                <p>Create new Account? <span> Sign Up</span></p>
                <InputField name='Phone Number' />
                <InputField name='Password' />
                <CustomButton name='Sign In' />
            </div>
        </div>
    );
}

export default SignIn;