import styled from "styled-components"
import { useAuth } from "../Provider/auth";


export default function Header() {

    const { name } = useAuth()

    return (
        <HeaderTag>
            {(!name) ?
                <>
                    <nav>
                        <Text color="green"></Text>
                    </nav>
                    <div>
                        <Text color="green">Entrar</Text>
                        <Text>Cadastrar-se</Text>
                    </div>
                </>
                :
                <>
                    <nav>
                        <Text color="green">Seja bem-vindo(a), {name}</Text>
                    </nav>
                    <div>
                        <Text>Home</Text>
                        <Text>Ranking</Text>
                        <Text>Sair</Text>
                    </div>
                </>}
        </HeaderTag>
    )
}

const HeaderTag = styled.header`

    width: 100%;
    border: 1px solid black;
    height: 90px;
    display: flex;
    justify-content: space-between;
    padding: 0 100px 10px 100px;
    align-items: flex-end;
    font-weight: 400;
    font-size: 18px;

    div{
        display: flex;
        gap: 20px;
    }
    div span{
        cursor: pointer;
    }
    div span:hover{
        text-decoration: underline;
    }

`;
const Text = styled.span`

    color: ${props => (props.color === 'green') ? '#5D9040' : '#9C9C9C'};
`;