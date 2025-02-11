import axios from "../services/axiosInstance"
import { useAuthStore } from "../store/authStore"
import { useNavigate } from "react-router-dom"
import { AuthInterface } from "../types"

export const useSignUp = () => {
  const {setAuth} = useAuthStore()

  const navigate = useNavigate()

  const signUp = async({
    username,
    password
  }: AuthInterface) => {
    try {
      const res = await axios.post("/auth/signup", {
        username,
        password
      })
      if(res.status === 201) {
        setAuth(true)
        navigate("/")
      }
    } catch (error) {
      console.log(error)
    }

  }

  return {signUp}
}

export default useSignUp