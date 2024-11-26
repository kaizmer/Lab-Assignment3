import {ScrollView, View, StyleSheet} from 'react-native'
import { Avatar, Text, TextInput, Button} from 'react-native-paper';
import styles from '../styles/styles';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';


const ResetPass = () => {
    const router=useRouter();
    const [text, setText] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [togglePassword, setTogglePassword] = useState(false);
    return (
        <View style={loginStyle.container}>
            <View style={{...loginStyle.section,...loginStyle.reglogoBox, marginBottom: 0}}>
                <Avatar.Image style={{ backgroundColor: 'transparent'}}source={require("../assets/avatar.png")}size={100}/>
                <Text variant='headlineMedium' style={{marginTop: 10, color: 'black'}}>My App</Text>
                <Text variant='displaySmall' style={{marginTop: 10, color: 'black'}}>Reset Password</Text>
                <Text variant='titleSmall' style={{marginTop: 10, color: 'black', width: 340, textAlign: 'center', marginBottom: 0}}>Enter your email below to receive a secure code to reset your password and regain account access.</Text>
            </View>
            <View style={loginStyle.section}>
            <TextInput
                textContentType='emailAddress'
                style ={{...loginStyle.inputBox, marginTop: 0}}
                label="Email"
                value={text}
                onChangeText={text => setText(text)}
                mode='outlined'
                left={<TextInput.Icon icon="email"/>}
            />
            <Button style={{...loginStyle.buttonBox, width: 300, marginTop: 10, backgroundColor: '#FF6961'}} icon="email-fast-outline" mode="contained-tonal" onPress={() => console.log('CODE-SENT')}>Email Code</Button>
            <Button style={{...loginStyle.buttonBox, width: 300, marginTop: 10, backgroundColor: '#FF6961'}} icon="arrow-left" mode="text" onPress={() => router.back()}>Go back</Button>

            </View>
        </View>
    )
}

export default ResetPass

const loginStyle = StyleSheet.create(styles)