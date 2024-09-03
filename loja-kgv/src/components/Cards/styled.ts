import styled from "styled-components";


export const DivCarros = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-family: "Zen dots";
    text-align: center;
    justify-items: center;
    gap: 30px;
    margin: 0 200px;
`;

export const ImgCarro = styled.img`
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`

export const DivCarro = styled.div`
    border: solid 2px #999999;
    border-radius: 20px;
    box-shadow: 7px 10px 18px -7px rgba(0,0,0,0.6);
    transition: 0.4s linear;
    height: 350px;
    
    &:hover{
        transform: translateY(-15px);
    }
`