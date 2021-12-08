import styled from 'styled-components'

export default function Span(props) {
    const Span=styled.span`
           width:886px;
           display:block;
           font-size:1.4rem;
           position:absolute;
           top:${props.top};
           margin-left:6%;   
    `
    return (
        <>
            <Span>{props.text}</Span>        
        </>
    );
}