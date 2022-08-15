import React from "react";
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity, StatusBar } from "react-native";

import Logo from '../../../assets/logo.png'

//const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function PrimeiraTela( { navigation }){
   //fragmento 
   
    return <View style={estilos.fragmento}>
        <StatusBar backgroundColor="#80C50080" barStyle="dark-content" />

        <Image source={Logo} style={estilos.logo} />
    
        <View style={estilos.conteudo}>
            
            <Text style={estilos.nomeApp}>Papaya App</Text>

            <Text style={estilos.descricao}> 
                Um aplicativo para você conferir as fases de maturação do mamão.
            </Text>

            <TouchableOpacity
                style={estilos.botao}
                onPress={() => navigation.navigate('Papaya App')}>

                <Text style={estilos.textoBotao}>
                    Prosseguir
                </Text>
            </TouchableOpacity>
        </View>
        
    </ View>
}

const estilos = StyleSheet.create({
    fragmento:{
        width: "100%",
        height: height,
        alignItems: "center",
        paddingHorizontal: 20,
        justifyContent: "space-evenly",
        backgroundColor: "#fafafa"
    },
    logo:{
        width: 316.24,
        height: 380,
        justifyContent: "center",
        flexDirection: "row",
    },
    conteudo: {
        justifyContent: "flex-end",
        alignItems: "flex-start",
        width: "100%",
        justifyContent: "space-between",
    },
    nomeApp: {
        fontSize: 30,
        lineHeight: 46,
        fontWeight: "bold",
    },
    descricao: {
        fontSize: 18,
        lineHeight: 24,
        color: "#121212B9",
        marginTop: 5,
    },
    botao:{
        backgroundColor: "#80C500",
        width: "100%",
        borderRadius: 15,
        alignItems: "center",
        paddingVertical: 15,
        marginTop: 50,
    },
    textoBotao: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
})