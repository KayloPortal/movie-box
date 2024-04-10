import { createContext, useContext, useEffect, useState } from "react";

const tokenContext = createContext()

function TokenProvider({children}) {
  const localToken = localStorage.getItem("token")
  const [token, setToken] = useState(
    localToken ? localToken : false
  )

  useEffect(() => {
    localStorage.setItem("token", token)
  }, [token]) 

  const handleToken = (newToken) => {
    setToken(newToken)
  }

  return (
    <tokenContext.Provider value={[token, handleToken]}>
      {children}
    </tokenContext.Provider>
  )
}

export function useTokenContext() {
  const value = useContext(tokenContext)
  if (!value) throw("Wrong Scope For TokenContext")
  return value
}

export default TokenProvider