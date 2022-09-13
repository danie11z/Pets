import React, {useState} from 'react'
import axios from "axios"
import Dado from "../assets/randomsymbol.png"
import * as S from "../Styles/Style"

export default function Dogs(){
    const [data, setData] = useState(null);

    const API = "https://dog.ceo/api/breeds/image/random"

    const DogsApi = () => {
        axios.get(API)
        .then((res) => {
            setData(res.data.message)
        })
        .catch((error) => {
            console.log("Desculpe, ocorreu um erro na requisição", error)
        })
    }

    return(
        <S.Painel>
            <S.PainelBox>
                <h2>Dá uma olhada nos doguinhos!</h2>
                <S.PetImgBox>
                    <S.DogsImg src={data} alt="Os cachorros" />
                </S.PetImgBox>
                <S.Btn onClick={() => {DogsApi()}}>
                    <div>
                        <S.DadoBtn src={Dado} alt="Um dado preto" />
                    </div>
                </S.Btn>
            </S.PainelBox>
        </S.Painel>
    )
}