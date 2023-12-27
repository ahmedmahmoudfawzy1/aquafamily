import  { useEffect } from 'react'
import {  useRecoilState } from 'recoil'
import { authData } from '../../States/Atoms/auth'
import { useNavigate } from 'react-router-dom';

export default function IsLoggedIn ({children}) {
    const [auth] = useRecoilState(authData);

    const navigate = useNavigate();

    useEffect(() => {
        if(!auth.isAuth){
            navigate('/login');
        }
    },[auth])
  return (
    children
  )
}
