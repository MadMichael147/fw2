import { useState } from "react";
import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";
import { Container } from "react-bootstrap";

export default function Promessa() {
const [pao, setpao] = useState("")
    setTimeout(() => {
        document.title = "Promessa é dívida"
        setpao("é uma dívida")
    }, 2000);
    return <>
    <Menu />
    <Container>
        Promessa{pao==="" ? <img src='' alt="" width='500' height='600'></img>: pao}
    </Container>
    <Footer />
    </>
}