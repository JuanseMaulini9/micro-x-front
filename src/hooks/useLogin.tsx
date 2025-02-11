import axios from "../services/axiosInstance"
import { useAuthStore } from "../store/authStore"
import { useNavigate } from "react-router-dom"
import { AuthInterface } from "../types"

export const useLogin = () => {
  const {setAuth} = useAuthStore()

  const navigate = useNavigate()

  const login = async({
    username,
    password
  }: AuthInterface) => {
    try {
      const res = await axios.post("/auth/login", {
        username,
        password
      })
      if(res.status === 200) {
        setAuth(true)
        navigate("/")
      }
    } catch (error) {
      console.log(error)
    }

  }

  return {login}
}

export default useLogin