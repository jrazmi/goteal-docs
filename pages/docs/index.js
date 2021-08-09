import { useRouter } from 'next/dist/client/router'
import { Layout } from '../../components/Global/Layout';

export default function DocPage() {
    const router = useRouter();
    const { docName } = router.query;
  return (
    <Layout>
      <h1>{docName}</h1>
      
    </Layout>
  )
}