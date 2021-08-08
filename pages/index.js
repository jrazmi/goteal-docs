import Link from 'next/link'
import { Layout } from '../components/Global/Layout';

export default function Home() {
  return (
    <Layout>
      Hello World.{' '}
      <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
        <a>About</a>
      </Link>
    </Layout>
  )
}