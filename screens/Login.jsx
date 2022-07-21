import { Text, View, StyleSheet, StatusBar, TextInput, useWindowDimensions, Alert } from 'react-native';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import { login } from '../api';

function Login({ navigation }) {
    const [showPass, setShowPass] = useState(false);
    const handleLogin = async () => {
        try {
            const user = await login();
            navigation.navigate({ name: 'Profile', params: { user: user } });

        }
        catch (err) {
            Alert.alert('Something went wrong');
        }

    }
    const styles = StyleSheet.create({
        loginContainer: {
            flex: 1,
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingTop: 60,
        },
        title: {
            fontSize: 30,
            fontWeight: '600',
        },

        inputContainer: {
            paddingHorizontal: 16,
            marginTop: 32,
        }
    })

    return (
        <View style={styles.loginContainer}>
            <Text style={styles.title}>Log In</Text>
            <View style={styles.inputContainer}>
                <InputField placeholder={'Email'} textContentType="emailAddress" />
                <InputField placeholder={'Password'} secureTextEntry={!showPass} textContentType={'password'} password={true} showPass={showPass} setShowPass={setShowPass} />
                <PrimaryButton handleClick={handleLogin} />
            </View>
        </View>

    )
}

export default Login