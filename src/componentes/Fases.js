import React from "react";
import { Image, View, StyleSheet, Text, FlatList } from "react-native";


export default function Fases({ titulo, imagem, descricao } ){

    return <View style={estilos.item}>

        <Image source={imagem} style={estilos.img} />

        <Text style={estilos.titulo}>
            { titulo }
        </Text>
        <Text style={estilos.descricao}>
            { descricao }
        </Text>

    </View>
};

const estilos = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
    },
    titulo: {
        fontSize: 19,
    },
    descricao: {
        fontSize: 19,
    }
});