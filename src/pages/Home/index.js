import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from "react-native";

import IconMat from '../../../assets/icon-mat.png'
import Clock from '../../../assets/clock.png';


export default function Home( {navigation }){
    return <>
        <View style={estilos.contPag}>

            <StatusBar backgroundColor="#80C50080" barStyle="dark-content" />

            <Text style={estilos.title}>
                Ponto de colheita:
            </Text>

            <TouchableOpacity style={estilos.caixa} onPress={() => navigation.navigate('Fases de maturação')}>
                <Image source={IconMat} />
                <Text style={estilos.titleBox}>Fases de maturação</Text>
                
                <Text style={estilos.describe}>Definição do ponto de colheira do mamão.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.caixa} onPress={() => navigation.navigate('Câmera')}>
                <Image source={Clock} />
                <Text style={estilos.titleBox}>Câmera</Text>
                <Text style={estilos.describe}>Use a câmera para analisar o seu mamão.</Text>
            </TouchableOpacity>
            
        </View>
    </>
}

const estilos = StyleSheet.create({
    contPag:{
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    title:{
        color: "#000000",
        fontSize: 16,
        marginBottom: 10,
    },
    caixa: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 15,

        shadowColor: "#00000050",
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 10,

        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    titleBox: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 5,
        color: "#000",
    },
    describe: {
        color: "#00000080",
        fontSize: 15,
    }
    
});

{/* <Button
                title="inicial"
                onPress={() => navigation.navigate('PrimeiraTela')}
            /> */}