import { Text, View, StyleSheet, StatusBar, TextInput, useWindowDimensions, Alert } from 'react-native';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import { login } from '../api';
import { useEffect } from 'react';
import * as Location from "expo-location";


function Login({ navigation }) {
    const [showPass, setShowPass] = useState(false);
    const [cred, setCred] = useState({ email: '', password: '' });

    var foregroundPermission;
    const getPermision = async () => {
        await Location.enableNetworkProviderAsync();
        return await Location.getForegroundPermissionsAsync();
    }


    useEffect(() => {
        foregroundPermission = getPermision();
    }, [])

    const handleLogin = async () => {
        if (cred.email === "" || cred.password === "") {
            console.log("hello");
            Alert.alert("Please fill in valid credentials");
            return;
        }
        else if (foregroundPermission?.status !== 'granted') {
            foregroundPermission = await getPermision();
            if (foregroundPermission?.status === 'granted') {
                const user = await login();
                setCred({ email: "", password: "" });
                navigation.navigate({ name: 'Profile', params: { user: user } });

            }
            else {
                Alert.alert(
                    'Permission not granted',
                    'Allow the app to use location service.',
                    [{ text: 'OK' }],
                    { cancelable: false }
                );
            }
        }
        else {
            const user = await login();
            navigation.navigate({ name: 'Profile', params: { user: user } });
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
                <InputField value={cred.email} placeholder={'Email'} textContentType="emailAddress" onChangeText={(e) => setCred({ ...cred, email: e })} />
                <InputField value={cred.password} placeholder={'Password'} secureTextEntry={!showPass} textContentType={'password'} onChangeText={(e) => setCred({ ...cred, password: e })} password={true} showPass={showPass} setShowPass={setShowPass} />
                <PrimaryButton handleClick={handleLogin} />
            </View>
        </View>

    )
}

export default Login