import { useEffect, useState } from "react";
import { useAuth } from "../../Provider/auth";
import { getUser } from "../../Server/UrlsConnect";
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

        }).catch(e => {
            alert(e.response.data)
        })
        // eslint-disable-next-line
    }, [refresh])

    function handleSubmit(e) {
        e.preventDefault()

        console.log(form)
    }

    return (

        <HomePage>

            <form onSubmit={handleSubmit}>
                <Input id='url' placeH='Links que cabem no bolso' handleForm={handleForm} type='text' />
                <Input type='submit' text='Encurtar link' />
            </form>

            <UrlBoard>

                {(!userData.shortened_urls)?''
                
                :userData.shortened_urls.map( (e,i) => <Url key={i} 
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