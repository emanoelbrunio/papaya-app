import React from "react";
import { Image, StyleSheet } from "react-native";
import Eg3 from "../../../assets/Estagio3.png"


export default function Photo(){
    return <>
        <Image source={Eg3} style={estilos.foto} />
    </>
}

const estilos = StyleSheet.create({
    foto: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    }
})