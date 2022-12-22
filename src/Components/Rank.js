import styled from "styled-components";


export default function Rank({name, links, visits, position}){

    return(
        <Ranks>{position}. {name} - {links} links - {visits} visualizações</Ranks>
    )
}


const Ranks = styled.li`

    font-size: 30px;
    margin-bottom: 15px;

`;