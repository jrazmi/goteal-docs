import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
export default function About() {
    const {docName} = useRouter();
  return (
    <div>
      <div>Doc Name</div>
      <div>
        Back to{' '}
        <Link href="/" as={process.env.BACKEND_URL + '/'}>
          <a>Home</a>
        </Link>
      </div>
    </div>
  )
}