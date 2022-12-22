import styled from "styled-components";


export default function Url({link, shortLink, visitCount}) {

    return (
        <Urlcss>
            <article>

                <p>{link}</p>
                <span>{shortLink}</span>
                <span>Quantidade de visitantes: {visitCount}</span>

            </article>
            <div><ion-icon name="trash-outline"></ion-icon></div>

        </Urlcss>
    );
}


const Urlcss = styled.li`

    width: 80%;
    height: 60px;
    background: #80CC74;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px 0px 0px 12px;
    width: 90%; 
    position: relative;

    

    article{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        padding-inline: 20px;
        color: white;
        
        


        p{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 300px;
        }
    }
    div{
        position: absolute;
        top: 0;
        right: -130px;
        height: 60px;
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 0px 12px 12px 0px;
        width: 130px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:25px;
        color: red;

    }

`;