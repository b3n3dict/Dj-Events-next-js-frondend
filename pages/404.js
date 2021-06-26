import {FaExclamationTriangle} from 'react-icons/fa'
import Layout from "../components/Layout"
import styles from '../styles/404.module.css'
import Link from 'next/link'
const NotFoundPage = () => {
    return (
        <Layout title="Page Not Found">
             <div className={styles.error}>
                 <h1><FaExclamationTriangle/> 404</h1>
                 <h4>Sorry, there is nothing</h4>
                 <Link href="/">Go Back Home</Link>
             </div>
        </Layout>
    )
}

export default NotFoundPage
