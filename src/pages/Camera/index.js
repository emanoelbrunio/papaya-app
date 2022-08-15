import React, {useState, useEffect, useRef} from "react";
import { StyleSheet, TouchableOpacity, View, Image, Modal, Text, Dimensions } from "react-native";
import { Camera } from 'expo-camera';

import Flash from '../../../assets/Flash.png'
import Photograph from '../../../assets/Photograph.png'
import Gallery from '../../../assets/Gallery.png'
import Close from '../../../assets/Close.png'

export default function Cam(){
    
    
    const camRef = useRef(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    },[])

    if (hasPermission === null){
        return <View />;
    }
    if (hasPermission === false){
        return <Text> Acesso negado! </Text>
    }

    async function takePicture(){
        if(camRef){
            const data = await camRef.current.takePictureAsync();
            setCapturedPhoto(data.uri)
            setOpen(true)
        }
    }

    return (
        <View style={styles.container}>
            <Camera 
                style={{flex: 1}}
                type={type}
                ref={camRef}
            >
                <View style={styles.botoes}>
                    <TouchableOpacity>
                        <Image source={Gallery} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.photo} 
                        onPress={ takePicture }
                    >
                        <Image source={Photograph} style={styles.photoIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={Flash} />
                    </TouchableOpacity>
                </View>
            </Camera>

            { capturedPhoto &&
                <Modal
                    transparent={false}
                    visible={open}
                >
                    <View style={styles.viewModal}>

                        <TouchableOpacity style={styles.buttonClose} onPress={() => setOpen(false)}>       
                            <Image style={styles.imgClose} source={Close} />
                        </TouchableOpacity>
                        
                        <Image style={styles.imgModal} source={{uri: capturedPhoto}} />

                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.buttonAnalise} onPress={() => setOpen(false)}>
                                <Text style={styles.textAnalise} >Analisar esse mamão</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonNewPhoto} onPress={() => setOpen(false)}>
                                <Text style={styles.textNewPhoto} >Tire uma nova foto</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    botoes:{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flex: 1,
        position: "absolute",
        bottom: 30,
    },
    photo: {
        marginHorizontal: 75,
    },
    photoIcon: {
        width: 70,
        height: 70,
    },
    viewModal:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        //margin: 20,
    },
    buttonClose: {
        position: "absolute",
        right: 20,
        top: 30,
        elevation: 5,
        zIndex: 5,
    },  
    imgModal:{
        width: "100%",
        height: "100%",
    },
    buttons:{
        width: "100%",
        flex: 1,
        position: "absolute",
        bottom: 20,
        paddingHorizontal: 20
    },
    buttonAnalise: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,

        backgroundColor: "#80C500",
    },
    textAnalise: {
        color: "#000",
        paddingVertical: 12.5,
        fontSize: 18,
        fontWeight: "bold",
    },
    buttonNewPhoto:{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#80C500",
        borderRadius: 15,
        borderWidth: 2,
        marginTop:15
    },
    textNewPhoto: {
        color: "#80C500",
        paddingVertical: 11.5,
        fontSize: 18,
        fontWeight: "bold",
    }
});