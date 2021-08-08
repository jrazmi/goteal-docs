import { useRouter } from 'next/router';
import Link from 'next/link'
import { Layout } from '../../components/Global/Layout';



const PageNumberHome = () => {

    const router = useRouter();
    const { pageNumber } = router.query;
    return(
        <Layout>

            <h1> Hi {pageNumber} </h1>

            <div>
        Back to{' '}
        <Link href="/" as={process.env.BACKEND_URL + '/'}>
          <a>Home</a>
        </Link>
      </div>
        </Layout>

    )
}

export default PageNumberHome;