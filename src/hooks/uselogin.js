import { useState } from "react"
import { projectAuth } from "../firebase/confij"

export const uselogin = () => {
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(null)
    const login = async (email, password, setUser) => {
        try {
            setError(null)
            setLoader(true)
            const req = await projectAuth.signInWithEmailAndPassword(email, password)
            await setUser(req.user);
            setLoader(false)
        } catch (err) {
            setLoader(false)
            setError(err.message)
        }


    }

    return { loader, error, login }
}