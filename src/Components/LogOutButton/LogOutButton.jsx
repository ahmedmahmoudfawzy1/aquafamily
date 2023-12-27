import React from 'react'
import { Button } from 'react-bootstrap'
import { useRecoilState } from 'recoil';
import { authData } from '../../States/Atoms/auth';

export default function LogOutButton() {
    const [auth , setAuth] = useRecoilState(authData);
    function handelLogOut () {
        setAuth(
            {
                isAuth: false,
                userId : null
            }
        )
        localStorage.removeItem('loogedinUser');
    }
  return (
        <Button variant='primary' onClick={handelLogOut}>LogOut</Button>
  )
}
