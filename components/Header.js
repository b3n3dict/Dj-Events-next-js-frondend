import Link from 'next/link'
import styles from '@/styles/Header.module.css'
import Image from 'next/image'
import AuthContext from '@/context/AuthContext'
import { useContext } from 'react'
import { FaSearch,FaPlusCircle,FaSignInAlt,FaSignOutAlt } from 'react-icons/fa'
import SearchBar from './SearchBar'

export default function Header() {
    const {user,logout} = useContext(AuthContext)
    return (
        <header className={styles.header}>
         <div className={styles.logo}>
        
             <Link href="/">
             <div className={styles.logo_div}>
             <img className={styles.log_img} src="https://i.pinimg.com/originals/05/4a/a3/054aa3421c22e0c9e04ada3082066a8d.gif"/>
                 <a>Dj Events</a>
             </div>
             </Link>
         </div>
             
           <SearchBar/>
            <nav>
                <ul>
                    <li>
                    <Link href="/events">
                        <a>Events</a>
                    </Link>
                    </li>
                    {user ?
                     <>
                     <li>
                    <Link href="/events/add">
                        <a>Add Event <FaPlusCircle/> </a>
                    </Link>
                    </li>
                     <li>
                    <Link href="/account/dashboard">
                        <a>Dashboard </a>
                    </Link>
                    </li>
                     <li>
                         <button onClick={()=>logout} className="btn">

                         <FaSignOutAlt/> LogOut
                         </button>
                     </li>
                     </> : <>
                    <li>
                    <Link href="/account/login">
                        <a className={styles.btnLogin}>Login <FaSignInAlt/> </a>
                    </Link>
                    </li>
                      </>}
                   
                   
                </ul>
            </nav>
        </header>
    )
}
