import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import {Link} from "react-router-dom"


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
`

export const MenuBox = styled.div`
    display: none;
`

export const Topo = styled.header`
    display: flex;
    justify-content: space-evenly;
    height: 30vh;
`

export const Logotipo = styled.img`
    width: 15.5vw;
`

export const LogoAndTitle = styled.section`
    display: flex;
    align-items: center;
`

export const Titulo = styled.h1`
    font-size: 2.6vw;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
`

export const DeskMenuList = styled.ul`
    display: flex;
    width: 20vw;
    justify-content: space-evenly;
`

export const Part = styled(Link)`
    text-decoration: none;
    color: #000000;
    font-weight: 600;
    font-size: 1.5vw;

    &:hover{
        text-decoration: underline;
    }
`

export const RedesBox = styled.section`
    width: 11vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Redes = styled.img`
    width: 3vw;
`

export const Painel = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 90vh;
    align-items: center;
`

export const PainelBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid;
    border-radius: 20px;
    justify-content: space-evenly;
    height: 80vh;
    width: 50%;
`

export const DadoBtn = styled.img`
    height: 4vh;
`
export const PetImgBox = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 35vw;
    height: 60vh;
`

export const DogsImg = styled.img`
    width: 80%;
    height: 80%;
`

export const Btn = styled.button`
    width: 10vw;
    border: none;
    height: 7vh;
    background-image:
`

export const Apresentação = styled.section`
    display: flex;
    justify-content: center;
    height: 25vh;
    align-items: center;
`

export const ApresentaçãoTexto = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 16vh;
`

export const HomeText = styled.p`
    text-align: justify;
    text-indent: 2vw;
    font-size: 1.1rem;
`