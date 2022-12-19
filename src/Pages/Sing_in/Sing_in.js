import { useState } from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import { postSingIn } from "../../Server/UrlsConnect";
import { useAuth } from "../../Provider/auth";
import { useNavigate } from "react-router-dom";


export default function SingIn(){

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const {setUser} = useAuth()

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function handleSubmit(e){
        e.preventDefault()

        postSingIn('/singIn', {email: form.email, password: form.password})
        .then((e)=>{

            setUser(e.data)
            navigate('/')

        })
        .catch(e=>alert("Informações erradas!"))
    }

    return(

        <SingForm onSubmit={handleSubmit}>

            <Input id='email' placeH='E-mail' handleForm={handleForm} type='email' />
            <Input id='password' placeH='Senha' handleForm={handleForm} type='password' />
            <Input type='submit' text='Entrar'/>

        </SingForm>
    );
}


export const SingForm = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;


`;