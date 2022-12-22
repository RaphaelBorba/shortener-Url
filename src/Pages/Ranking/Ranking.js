import { useEffect, useState } from "react";
import Rank from "../../Components/Rank";
import { useAuth } from "../../Provider/auth";
import { getRanking } from "../../Server/UrlsConnect";
import { RankingPage, Table } from "./style";


export default function Ranking(){

    const {user} = useAuth()

    const [rank, setRank] = useState([])

    useEffect(()=>{
        getRanking().then(e=>{
            
            setRank(e.data)
            console.log(e.data)
        }).catch(e=>{

            alert(e.response.data)
        })
    },[])

    return(

        <RankingPage>

        <h1>&#127942; Ranking</h1>

        <Table>
            
            {rank.map( (e,i) => <Rank key={i} position={i+1} visits={e.visit_counts} name={e.name} links={e.links_count}/>)}

        </Table>
        
        {(!user.name)?<h1>Crie sua conta para usar nosso serviço!</h1>:''}

        </RankingPage>
    );
}