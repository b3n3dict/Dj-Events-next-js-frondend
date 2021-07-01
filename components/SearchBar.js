import styles from '@/styles/Search.module.css'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import { useRouter } from 'next/router'

const SearchBar = () => {
  const router = useRouter()
   const [value,setValue] = useState('')
    const onSubmitHandler=(e)=>{
       e.preventDefault()
       router.push(`/events/search?term=${value}`)
       setValue('')
    }
    return (
        <form onSubmit={onSubmitHandler}>
        <div className={styles.searchbar}>
        <input className={styles.search_input} value={value} type="text" name="" placeholder="Search.." onChange={(e)=>setValue(e.target.value)}/>          
          <button type="submit" className={styles.search_icon}> <FaSearch /></button>
          
      </div>
      </form>
    )
}

export default SearchBar
