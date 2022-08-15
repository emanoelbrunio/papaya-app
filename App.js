import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './src/pages/Home';
import Fases from './src/pages/Fases';
import PrimeiraTela from './src/pages/PrimeiraTela';
import Cam from './src/pages/Camera';

// import Photo0 from './src/pages/Photos/Photos0';
// import Photo1 from './src/pages/Photos/Photos1';
// import Photo2 from './src/pages/Photos/Photos2';
// import Photo3 from './src/pages/Photos/Photos3';
// import Photo4 from './src/pages/Photos/Photos4';
// import Photo5 from './src/pages/Photos/Photos5';
// import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

const Stack = createNativeStackNavigator();

export default function App( { navigation }) {
  return (
  
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Primeira Tela" >

        <Stack.Screen name="Primeira Tela" component={PrimeiraTela} options={{headerTransparent: true, headerTitle: '' }}/>

        <Stack.Screen name="Papaya App" component={Home} options={{headerBackVisible: false}}/>
        
        <Stack.Screen name="Fases de maturação" component={Fases} />

        <Stack.Screen name="Câmera" component={Cam} />

        {/* <Stack.Screen name="Foto do mamão com 0%" component={Photo0} />

        <Stack.Screen name="Foto do mamão com 20%" component={Photo1} />

        <Stack.Screen name="Foto do mamão com 40%" component={Photo2} />

        <Stack.Screen name="Foto do mamão com 60%" component={Photo3} />

        <Stack.Screen name="Foto do mamão com 80%" component={Photo4} />
        
        <Stack.Screen name="Foto do mamão com 100%" component={Photo5} />
         */}
        
        
      </Stack.Navigator>

    </NavigationContainer> 
  );
}

{/* <NavigationContainer>

<Stack.Navigator initialRouteName="PrimeiraTela">

  <Stack.Screen name="PrimeiraTela" component={Ptela} />

  <Stack.Screen name="Papaya App" component={Home}/>
  
  

</Stack.Navigator>

</NavigationContainer> */}