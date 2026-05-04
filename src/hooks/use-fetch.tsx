import { useState } from "react"

const useFetch = <T, P extends unknown[]> (cb : (...args: P) => Promise<T> ) => {

    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)
    const fn = async(...args :P) =>{
        setLoading(true)
        setError(null)

        try{
            const response = await cb(...args);
            setData(response);
        } catch (err){
            const errorObject = err instanceof Error ? err : new Error(String(err));
      setError(errorObject);
        } finally{
            setLoading(false)
        }
    }

    return {data, loading, error, fn}
 
}

export default useFetch
