import Head from 'next/head'

const Layout = ({children,title,description,keywords}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta  name='keywords' content={keywords}/>
            </Head>
            {children}
        </div>
    )
}
  Layout.defaultProps = {
      title:"DJ EVENTS || Find the Hotest parties",
      description: "find the latest dj event and music events",
      keywords:'music dj rock'
  }
export default Layout


