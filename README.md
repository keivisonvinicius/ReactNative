 Descrição do Projeto

Este é um aplicativo mobile desenvolvido em React Native utilizando Expo, React Navigation e Firebase Firestore.
O objetivo do projeto é demonstrar conceitos fundamentais ensinados durante o semestre:

Componentes funcionais

Hooks (useState, useEffect)

Estilização com StyleSheet

Flexbox

Navegação entre telas

Consumo de dados do Firestore

Passagem de parâmetros entre telas

O app possui três telas principais:

 1. Tela de Login

Contém inputs controlados para e-mail e senha.

Usa useState para armazenar os valores digitados.

Ao clicar em Entrar, o usuário é redirecionado para a Home.

Inclui botões visuais fictícios para login com GitHub e Google.

 2. Home Screen

Busca os cursos cadastrados no Firestore com getDocs().

Renderiza os cursos utilizando uma FlatList.

Cada item possui nome e descrição.

Ao clicar no item, os dados do curso são enviados para a Details Screen via navigation params.

 3. Details Screen

Recebe os dados enviados pela Home por meio de route.params.

Exibe ID, nome e descrição do curso selecionado.

 Navegação

A navegação do app é feita com:

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


As telas são registradas dentro de um Stack Navigator, com o Login como rota inicial.

 Tecnologias Utilizadas

React Native

Expo

React Navigation (Stack)

Firebase Firestore

JavaScript / JSX
