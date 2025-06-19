import FormInput from "../../components/form/FormInput"

import { createAlert } from "../../util/createAlert"
import { useForm, useFormState } from "react-hook-form"
import axios from 'axios'
import Butttons from "../../components/form/Butttons"
function Register() {
  //JS
  const { handleSubmit, register, formState } = useForm();
  const { isSubmitting } = formState;

const hdlSubmit = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const res = await axios.post(
        "http://localhost:8000/auth/register",
        value
      );
      console.log(res);
      createAlert("success", "Register Success", "You ready to login")

    } catch (error) {
      console.log(error)
      createAlert("info",
        "Register Failed",
        error.response?.data?.message);
    }
  };


  return (
    <div className="flex w-full h-full justify-end">


      {/* CARD */}
      <div className="border w-64 h-[300px] p-4 m-4 rounded-md bg-cyan-950">
        <h1 className="font-bold text-center text-white">Register</h1>


        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-4 mt-2">
            <FormInput register={register} name="email" />
            <FormInput register={register} name="name" />
            <FormInput register={register} name="password" />
            <FormInput register={register} name="confirmPassword" />
          </div>
          <div className="flex justify-center mt-4">
            <Butttons Label="Register" isSubmitting={isSubmitting} />
          </div>

        </form>



      </div>



    </div>
  )
}

export default Register