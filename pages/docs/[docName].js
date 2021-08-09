import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { Layout } from '../../components/Global/Layout';
export default function About() {
    const router = useRouter();
    const { docName } = router.query;
  return (
    <Layout>
      <h1>{docName}</h1>
      
    </Layout>
  )
}