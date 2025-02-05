import React, {useState, useEffect} from 'react';
import axios from 'axios';
import jwt_decode, { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function DashboardQuiz() {
    const[name, setName] = useState('');
    const[token, setToken] = useState('');
    const[expire, setExpire] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        refreshToken();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwtDecode(response.data.accessToken);
            console.log(decoded);
            setName(decoded.name);
            setExpire(decoded.exp)
        } catch (error) {
            navigate('/', { replace: true });
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async(config) => {
        const currentDate = new Date();
        if(expire * 1000 < currentDate.getTime()){
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwtDecode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error)=>{
        return Promise.reject(error);
    });

    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:5000/users',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data);
    }


  return (
    
    <div className='container mt-5'>
        <article class="message is-info">
            <div class="message-header">
                <p>Welcome Back : {name}!</p>
            </div>
            <div class="message-body">
                Let's have some fun with quiz!
            </div>
        </article>
    </div>
    
  )
}

export default DashboardQuiz
