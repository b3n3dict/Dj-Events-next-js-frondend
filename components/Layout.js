import Head from 'next/head'
import styles  from '../styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'
const Layout = ({children,title,description,keywords}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta  name='keywords' content={keywords}/>
            </Head>
            <Header/>
            <div className={styles.container}>{children}</div>
            <Footer/>
        </div>
    )
}
  Layout.defaultProps = {
      title:"DJ EVENTS || Find the Hotest parties",
      description: "find the latest dj event and music events",
      keywords:'music dj rock'
  }
export default Layout


