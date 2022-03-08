import { useRouter } from 'next/router'
import { useEffect } from 'react'

function Main() {
  const router = useRouter()
  useEffect(() => {
    if (router.pathname === '/') {
      router.push('/getquote')
    }
  }, [])
  return <div>Loading...</div>
}

export default Main
