import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Eg0 from "../../../assets/Estagio0.png"
import arrowRig from '../../../assets/arrowRig.png'
import arrowLef from '../../../assets/arrowLef.png'

export default function Photo(){
    return <>
        <Image source={Eg0} style={estilos.foto} />

        <View style={estilos.conteudo}>
            <TouchableOpacity>
                <Image source={arrowLef} />
            </TouchableOpacity>

            <Text> 0% </Text>

            <TouchableOpacity>
                <Image source={arrowRig} />
            </TouchableOpacity>
        </View>

    </>
}

const estilos = StyleSheet.create({
    foto: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    conteudo: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
        zIndex: 5,
        elevation: 10,
        
    }
})