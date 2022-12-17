import { useAuth } from "../../Provider/auth";
import { RankingPage, Table } from "./style";


export default function Ranking(){

    const {name} = useAuth()

    return(

        <RankingPage>

        <h1>&#127942; Ranking</h1>

        <Table>
            
        </Table>
        
        {(!name)?<h1>Crie sua conta para usar nosso serviço!</h1>:''}

        </RankingPage>
    );
}