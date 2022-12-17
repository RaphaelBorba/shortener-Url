import styled from "styled-components";

export default function Input({ placeH, type, handleForm, id, text, step}) {

    return (

        <InputDefault placeholder={placeH} type={type} required id={id} name={id} onChange={handleForm} step={step} value={text} />
    );
}

const InputDefault = styled.input`

    width:  ${props => props.type === 'submit' ? '200px' : '80%'};
    height: 60px;
    background-color: ${props => props.type === 'submit' ? '#5D9040' : '#ffffff'};
    font-size: 20px;
    color: ${props => props.type === 'submit' ? '#ffffff' : '#000000'};
    border: ${props => props.type === 'submit' ? 'none' : '1px solid rgba(120, 177, 89, 0.25)'} ;
    box-shadow: ${props => props.type === 'submit' ? 'none' : '0px 4px 24px rgba(120, 177, 89, 0.12)'} ;
    cursor: ${props => (props.type==='submit')?'pointer':'initial'};
    border-radius: 12px;
    padding-left: ${props => (props.type==='submit')?'0':'20px'};
`;