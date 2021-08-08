import Link from 'next/link'
import { Layout } from '../components/Global/Layout';


export default function Home() {
  
  return (
    <Layout>
      Hello World.{' '}
      <Link href="/1" as={process.env.BACKEND_URL + '/1'}>
        <a>Page 1</a>
      </Link>
      <Link href="/2" as={process.env.BACKEND_URL + '/2'}>
        <a>Page 2</a>
      </Link>
      <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
        <a>About</a>
      </Link>
    </Layout>
  )
}