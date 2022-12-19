import styled from "styled-components"
import { useAuth } from "../Provider/auth";
import logo from '../Assets/Images/Logo.png'
import { useNavigate } from "react-router-dom";


export default function Header() {

    const { user, setUser } = useAuth()

    const navigate = useNavigate()

    function logOut(){

        const confirm = window.confirm('Deseja sair?')
        
        if(confirm){
            setUser({})
            navigate('/sing_in')
        }
    }

    return (
        <HeaderTag>
            {(!user.name) ?
                <article>
                    <div>
                        <Text color="green"></Text>
                    </div>
                    <div>
                        <Text color="green" onClick={()=>navigate('/sing_in')}>Entrar</Text>
                        <Text onClick={()=>navigate('/sing_up')}>Cadastrar-se</Text>
                    </div>
                </article>
                :
                <article>
                    <div>
                        <Text color="green">Seja bem-vindo(a), {user.name}</Text>
                    </div>
                    <div>
                        <Text onClick={()=>navigate('/')}>Home</Text>
                        <Text onClick={()=>navigate('/')}>Ranking</Text>
                        <Text onClick={logOut}>Sair</Text>
                    </div>
                </article>}

                <img src={logo} alt={logo} />
        </HeaderTag>
    )
}

const HeaderTag = styled.header`

    position: relative;
    width: 100%;
    height: 150px;
    font-weight: 400;
    font-size: 18px;
    padding-bottom: 300px;

    article{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        height: 90px;
        padding: 0 100px 10px 100px;
    }

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
    img{
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 130px;
        left: 0;    
        right: 0;
        
    }

`;
const Text = styled.span`

    color: ${props => (props.color === 'green') ? '#5D9040' : '#9C9C9C'};
`;