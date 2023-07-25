import { Button } from '@/components/ui/button'
import Link from 'next/link'

const LandingPage = () => {
  return (
    <div>
      Landing Page (Unprotected)
      <div>
        <Link href={'/sign-in'}>
          <Button>Login</Button>
        </Link>
        <Link href={'/sign-up'}>
          <Button>Registr</Button>
        </Link>
        <Link href={'/dashboard'}>
          <Button variant={'destructive'}>Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
