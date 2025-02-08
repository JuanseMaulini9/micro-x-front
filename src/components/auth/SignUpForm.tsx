import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { userSchema } from "../../schemas/userSchema";


//todo agregar los errores al formulario y el hook para madar la info al backend
export const SignUpForm = () => {
  
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(userSchema)
  })
  
  return (
    <section className="p-8 flex flex-col justify-center">
          <h2 className="font-bold text-white text-[30px] mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit(data => console.log(data))} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="username" className="font-semibold text-[#8BE9BF]">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="username123"
                className="border-b-[1px] border-gray-600 px-2 py-1 bg-transparent text-white focus:outline-none"
                {...register("username")}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="font-semibold text-[#8BE9BF]">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="*****"
                className="border-b-[1px] border-gray-600 px-2 py-1 bg-transparent text-white focus:outline-none"
                {...register("password")}
              />
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <p className="text-gray-400 text-sm text-center hover:text-[#8BE9BF] cursor-pointer">
                <Link to="/login">
                  Already have an account? Log In
                </Link>
              </p>
              <button className="w-full bg-[#8BE9BF] text-black font-semibold py-2 rounded-lg hover:bg-[#6ce5a9] transition hover:cursor-pointer">
                Create account
              </button>
            </div>
          </form>
        </section>
  )
};
