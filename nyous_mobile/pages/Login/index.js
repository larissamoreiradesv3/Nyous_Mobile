import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Login = ({navigation}) => {

    const [email, setEmail] = useState( '' );
    const [senha, setSenha] = useState( '' );


    const Logar = () => {
        
        const corpo = {
            email : email,
            senha : senha
        }

        fetch('http://192.168.7.21:500/api/Account/Login',{
            method  : 'POST',
            headers :{
                'Content-Type'  :   'application/json'
            },
            body : JSON.stringify(corpo)
        })
        .then(response => response.json())
        .then(data => {

            if(data.token !== null || data.token !== undefined || data.token !== '' ){
                alert('Seja Bem-Vindo <3');
                alert(data.token);
                navigation.push('Autenticado');
            }else{
                alert('E-mail ou senha incválidos! Por favor, verifique e tente novamente <3')
            }

        })
    }

    return(
        <View styles={styles.container}>
            <TextInput
            style={styles.input}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="Digite seu e-mail:"
            />

            <TextInput
            style={styles.input}
            onChangeText={text => setSenha(text)}
            value={senha}
            placeholder="Digite sua senha:"
            secureTextEntry={true}
            />
             <TouchableOpacity
            style={styles.button}
            onPress={Logar()}
            >
            <Text style={styles.textButton}>Entrar</Text>
             </TouchableOpacity>
        </View>
    )        
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input : { 
        width       : "90%" ,
        height      : 40, 
        borderColor : 'gray',
        borderWidth : 1,
        marginTop   : 20,
        padding     : 5,
        borderRadius: 6
    },
    button : {
        backgroundColor : 'black',
        width           : '90%',
        padding         : 10,
        borderRadius    : 6,
        marginTop       : 20,
        flex            : 1,
        alignItems      : 'center',
        justifyContent  : 'center',
    },
    textButton : {
        color:'white',
    }

  });

export default Login;