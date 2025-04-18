import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const BASE_URL = import.meta.env.VITE_BASE_URL;



export default function LoginPage() {

    const navigate = useNavigate()

    const [isAuth, setIsAuth] = useState(false); 

    const [account, setAccount] = useState({
        username: "example@test.com",
        password: "example"
      })
      const handleInputChange = (e) => {
        const {value, name} = e.target;
    
        setAccount({
          ...account,
          [name]: value
        })
      }

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
          const res = await axios.post(`${BASE_URL}/v2/admin/signin`, account);
    
          const { token, expired } = res.data; 
    
    
          
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
    
    
          axios.defaults.headers.common['Authorization'] = token;
    
        //   getProducts();
    
          setIsAuth(true);
          
          navigate("/admin/goods");

        } catch {
          alert('登入失敗');
    
        }
    }

       const checkUserLogin = async () => {
         try {
            await axios.post(`${BASE_URL}/v2/api/user/check`)
            // getProducts();
            setIsAuth(true);

         } catch (error) {
           console.error(error)
         }
       }

       useEffect(() =>{
           const token = document.cookie.replace(
             /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
             "$1",
           );
           if (token) {
            axios.defaults.headers.common['Authorization'] = token;
            checkUserLogin().then(() => {
              navigate("/admin/goods");
            });
          }
      }, [navigate])

    return (
    
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="mb-5">後台管理登入</h1>
        <form  onSubmit={handleLogin} className="d-flex flex-column gap-3">
            <div className="form-floating mb-3">
            <input name="username" value={account.username} onChange={handleInputChange} type="email" className="form-control" id="username" placeholder="name@example.com" />
            <label htmlFor="username">Email address</label>
            </div>
            <div className="form-floating">
            <input name="password" value={account.password} onChange={handleInputChange} type="password" className="form-control" id="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
            </div>
        <button className="btn btn-coffee text-white">登入</button>
        </form>
        <p className="mt-5 mb-3 text-muted">&copy;SlientBrewDaily by HuiChun</p>
      </div>
       
    )
}
// export default function LoginPage (){
//     return (<>
//         <h1>這是LoginPage</h1>
//     </>)
// }