import React from "react"
import Pets from "../assets/Logo.png"
import Facebook from "../assets/face.png"
import Instagram from "../assets/insta.png"
import Twitter from "../assets/tt.png"



import * as S from "../Styles/Style"

const Header = ({rotaHome, rotaDogs, rotaCats}) => {
    return(
        <S.Topo>
            <S.MenuBox>
                <button>≡</button>
            </S.MenuBox>
            <S.LogoAndTitle>
                <div>
                    <S.Logotipo src={Pets} alt="Cachorro cinza com pelos brancos no meio do rosto, na ponta do rabo e nas patas, usando coleira vermelha, e gato amarelo com pelos brancos nas mesmas regiões que o cachorro, usando coleira da mesma cor com sino dourado. Ambos estão sentados em grama." />
                </div>
                <S.Titulo>Adote-me</S.Titulo>
            </S.LogoAndTitle>
            <S.Nav>
                <S.DeskMenuList>
                    <li>
                        <S.Part to="/" title="Início">{rotaHome}</S.Part>
                    </li>
                    <li>
                        <S.Part to="/cachorros" title="Cachorros">{rotaDogs}</S.Part>
                    </li>
                    <li>
                        <S.Part to="/gatos" title="Gatos">{rotaCats}</S.Part>
                    </li>
                </S.DeskMenuList>
            </S.Nav>
            <S.RedesBox>
                <a href="#" title="Facebook">
                    <S.Redes src={Facebook} alt="Logotipo preto do Facebook" />
                </a>
                <a href="#" title="Instagram">
                    <S.Redes src={Instagram} alt="Logotipo preto do Facebook" />
                </a>
                <a href="#" title="Twitter">
                    <S.Redes src={Twitter} alt="Logotipo preto do Facebook" />
                </a>
            </S.RedesBox>
        </S.Topo>
    )
}

export default Header