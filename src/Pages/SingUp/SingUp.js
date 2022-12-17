import { useState } from "react";
import Input from "../../Components/Input";
import { SingForm } from "../Sing_in/Sing_in";



export default function SingUp() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
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