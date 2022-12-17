import { useState } from "react";
import styled from "styled-components";
import Input from "../../Components/Input";


export default function SingIn(){

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
        console.log(form)
    }

    function handleSubmit(e){
        e.preventDefault()

        console.log('asdasd')
    }

    return(

        <SingInForm onSubmit={handleSubmit}>

            <Input id='email' placeH='E-mail' handleForm={handleForm} type='email' />
            <Input id='password' placeH='Senha' handleForm={handleForm} type='password' />
            <Input type='submit' text='Entrar'/>

        </SingInForm>
    );
}


const SingInForm = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;


`;