import React, { useState } from "react";
import { FlatList, Image, View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native"

import Eg0 from "../../../assets/Estagio0.png";
import Eg1 from '../../../assets/Estagio1.png';
import Eg2 from '../../../assets/Estagio2.png';
import Eg3 from '../../../assets/Estagio3.png';
import Eg4 from '../../../assets/Estagio4.png';
import Eg5 from '../../../assets/Estagio5.png';
import CamBut from '../../../assets/CamBut.png';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Item( { navigation }){
    const [boxs, setBox] = useState([
        {   
            imagem: Eg0,
            titulo: 'Casca do mamão com 0% amarelo.',
            describe: 'Seu mamão está com 0% da casca amarela',
            id: '0',
        },
        {   
            imagem: Eg1,
            titulo: 'Casca do mamão com 20% amarelo.',
            describe: 'Seu mamão está com 20% da casca amarela',
            id: '1',
        },
        {   
            imagem: Eg2,
            titulo: 'Casca do mamão com 40% amarelo.',
            describe: 'Seu mamão está com 40% da casca amarela',
            id: '2',
        },
        {   
            imagem: Eg3,
            titulo: 'Casca do mamão com 60% amarelo.',
            describe: 'Seu mamão está com 60% da casca amarela',
            id: '3',
        },
        {   
            imagem: Eg4,
            titulo: 'Casca do mamão com 80% amarelo.',
            describe: 'Seu mamão está com 80% da casca amarela',
            id: '4',
        },
        {   
            imagem: Eg5,
            titulo: 'Casca do mamão com 100% amarelo.',
            describe: 'Seu mamão está com 100% da casca amarela',
            id: '5',
        },

    ]);

    return <View style={estilos.item}>
        <FlatList
            //numColumns={1}
            //keyExtractor={(item) => item.id}
            data={boxs}
            renderItem={({ item }) => (
                <View style={estilos.box} onPress={() => navigation.navigate(item.imagem)}>
                    <Image style={estilos.img} source={item.imagem} />
                    <View style={estilos.textos}>
                        <Text style={estilos.title}>{item.titulo}</Text>
                        <Text style={estilos.describe}>{item.describe}</Text>
                    </View>
                </View>
            )}
        >
        </FlatList>

        <TouchableOpacity style={estilos.camBut} onPress={() => navigation.navigate('Câmera')}>
            <Image source={CamBut} style={estilos.camButIcon} />
        </TouchableOpacity>
    </View>
}

const estilos = StyleSheet.create({
    item: {
        paddingHorizontal: 20,
        width: width,
    },
    box:{
        marginTop: 15,
        flexDirection: "column-reverse",
        paddingBottom: 30,
        borderBottomColor: "#00000075",
        borderBottomWidth: 0.7,
    }, 
    img: {
        width: "100%",
        height: height / 1.5,
        borderRadius: 15,
        marginTop: 20,
    },
    textos: {
        width: "100%",
        flex: 1,
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        width: "100%",
        marginBottom: 5,
    },
    describe: {
        fontSize: 15,
        color: "#00000070",
    },
    camBut: {
        position: "absolute",
        bottom: 30,
        right: 30,
        backgroundColor: "#80C500",
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 15,
        elevation: 10,
    },
    camButIcon:{
        width: 29.93,
        height: 28,
    }
});