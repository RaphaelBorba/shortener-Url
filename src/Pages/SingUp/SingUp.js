import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../Components/Input";
import { postSingUp } from "../../Server/UrlsConnect";
import { SingForm } from "../Sing_in/Sing_in";



export default function SingUp() {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function handleSubmit(e){
        e.preventDefault()

        if(form.password !== form.confirmPassword){
            alert('Senhas diferentes!')
            return
        }

        postSingUp('/sing_up', {name: form.name, email: form.email, password:form.password})
        .then((e)=>{

            navigate('/sing_in')

        }).catch(e=>console.log(e.response.data))
    }

    return (

        <SingForm onSubmit={handleSubmit}>

            <Input id='name' placeH='Nome' handleForm={handleForm} type='text' />
            <Input id='email' placeH='E-mail' handleForm={handleForm} type='email' />
            <Input id='password' placeH='Senha' handleForm={handleForm} type='password' />
            <Input id='confirmPassword' placeH='Confirmar senha' handleForm={handleForm} type='password' />

            <Input type='submit' text='Criar Conta' />

        </SingForm>

    );
}