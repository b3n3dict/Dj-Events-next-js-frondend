import {FaUser} from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect,useState,useContext } from 'react'
import Link from 'next/link'
import styles from '@/styles/AuthForm.module.css'
import Layout from '@/components/Layout'
 const RegisterPage = () => {
     const [email,setEmail] = useState('')
     const [password,setPassword] = useState('')
     const [confirmPassword,setConfirmPassword] = useState('')
     const [userName,setUserName] = useState('')

     const onSubmitHandler = (e)=>{
         e.preventDefault()
        if(password !== confirmPassword){
            toast.error(`Password Do not match!`)
            return
        }
        console.log(userName,email,password)
     }
    return (
        <Layout title="User Registration">
          <div className={styles.auth}>
              <h1><FaUser/> Register</h1>
              <ToastContainer/>
              <form onSubmit={onSubmitHandler}>
              <div>
                      <label htmlFor="username">User Name:</label>
                       <input type="text" id="username" value={userName} onChange={(e)=>setUserName(e.target.value)} />
                  </div>
                  <div>
                      <label htmlFor="email">Email Address:</label>
                       <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                  </div>
                  <div>
                      <label htmlFor="password">Password:</label>
                       <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                  </div>
                  <div>
                      <label htmlFor="confirmpassword">Confirm Password:</label>
                       <input type="password" id="confirmpassword" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
                  </div>
                <input type="submit" value="Register" className="btn"/>
              </form>
              <p>Already have an account?
               <Link href='/account/login'>Login</Link></p>
          </div>
         
        </Layout>
    )
}

export default RegisterPage
