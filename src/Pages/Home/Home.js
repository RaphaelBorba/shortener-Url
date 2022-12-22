import { useEffect, useState } from "react";
import { useAuth } from "../../Provider/auth";
import { getUser, postUrl, urlAxios } from "../../Server/UrlsConnect";
import { HomePage, UrlBoard } from "./styled";
import Input from "../../Components/Input";
import Url from "../../Components/Url";


export default function Home() {

    const { user } = useAuth()
    const [userData, setUserData] = useState([])
    const [refresh, setRefresh] = useState(true)
    const [form, setForm] = useState({
        url: ''
    })

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    useEffect(() => {

        getUser(user.token).then(e => {
            
            setUserData(e.data)
            console.log(e.data)

        }).catch(e => {
            alert(e.response.data)
        })
        // eslint-disable-next-line
    }, [refresh])

    function handleSubmit(e) {
        e.preventDefault()

        postUrl(form, user.token).then(e=>{
            setRefresh(!refresh)
            setForm({url:''})
        }).catch(e=>alert(e.response.data))
    }

    return (

        <HomePage>

            <form onSubmit={handleSubmit}>
                <Input id='url' placeH='Links que cabem no bolso' handleForm={handleForm} type='text' />
                <Input type='submit' text='Encurtar link' />
            </form>

            <h1>Envie este link com a url encurtada: {urlAxios}/urls/open/'url encurtada aqui'</h1>

            <UrlBoard>

                {(!userData.shortened_urls)?''
                
                :(userData.shortened_urls[0]===null)?'':
                userData.shortened_urls.map( (e,i) => <Url key={i} 
                setRefresh={setRefresh} 
                refresh={refresh} 
                id={e.id} 
                link={e.url} 
                shortLink={e.short_url} 
                visitCount={e.visit_count} />)}

            </UrlBoard>

        </HomePage>
    );
}