import { View, Text } from 'react-native'
import React from 'react'
import DetailsScreen from './src/screens/DetailsScreen'
import Login from './src/screens/Login'
import HomeScreen from './src/screens/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Login" component={Login} options={{title:"Tela de Login"}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:"Cursos"}} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{title:"Detalhes do Curso"}}/>
        {/* Cada Screen recebe uma navigation como prop */ }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App