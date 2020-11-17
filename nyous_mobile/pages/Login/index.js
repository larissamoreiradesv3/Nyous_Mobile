import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Login = () => {

    const [email, setEmail] = useState( '' );
    const [senha, setSenha] = useState( '' );


    const Logar = () => {

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
            onPress={onPress}
            >
            <Text>Press Here</Text>
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
    }
  });

export default Login;