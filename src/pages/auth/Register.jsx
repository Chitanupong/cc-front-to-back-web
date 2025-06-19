import FormInput from "../../components/form/FormInput"

import { createAlert } from "../../util/createAlert"
import { useForm } from "react-hook-form"
import axios from 'axios'
function Register() {
  //JS
  const { handleSubmit, register } = useForm()

  const hdlSubmit = async (value) => {
    console.log(value)
    createAlert("success", "Register Success", "You ready to login")
    try {
      const res = await axios.post('http://localhost:8000/auth/register', value)
      console / log(res)
    } catch (error) {
      console.log(error)
      createAlert("info",
        "Register Failed",
        error.response?.data?.message);

    }
  }


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
            <button type="submit" className="bg-slate-600 text-white p-1 rounded-md">Register</button>
          </div>

        </form>



      </div>



    </div>
  )
}

export default Register