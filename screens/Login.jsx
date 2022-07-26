import { Text, View, StyleSheet, StatusBar, TextInput, Dimensions, Alert } from 'react-native';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import { login } from '../api';
import { useEffect } from 'react';
import * as Location from "expo-location";


function Login({ navigation }) {
    const [showPass, setShowPass] = useState(false);
    const [cred, setCred] = useState({ email: '', password: '' });
    const getPermision = async () => {
        await Location.requestForegroundPermissionsAsync();
    }

    useEffect(() => {
        getPermision();
    }, [])

    const handleLogin = async () => {
        const { status } = await Location.getForegroundPermissionsAsync()
        if (cred.email === "" || cred.password === "") {
            console.log("hello");
            Alert.alert("Please fill in valid credentials");
            return;
        }
        else if (status !== 'granted') {
            getPermision();
            const { status } = await Location.getForegroundPermissionsAsync();
            setCred({ email: "", password: "" });
            if (status === 'granted') {
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
            setCred({ email: "", password: "" });
            navigation.navigate({ name: 'Profile', params: { user: user } });
        }


    }
    const styles = StyleSheet.create({
        loginContainer: {
            flex: 1,
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingTop: Dimensions.get('window').width * 0.153
        },
        title: {
            fontSize: Dimensions.get('window').height / Dimensions.get('window').width * 14.613,
            fontWeight: '600',
        },

        inputContainer: {
            paddingHorizontal: Dimensions.get('window').width * 0.041,
            marginTop: Dimensions.get('window').height * 0.034,
        }
    })

    return (
        <View style={styles.loginContainer}>
            <Text style={styles.title}>Log In</Text>
            <View style={styles.inputContainer}>
                <InputField v={cred.email} placeholder={'Email'} textContentType="emailAddress" onChangeText={(e) => setCred({ ...cred, email: e })} />
                <InputField v={cred.password} placeholder={'Password'} secureTextEntry={!showPass} textContentType={'password'} onChangeText={(e) => setCred({ ...cred, password: e })} password={true} showPass={showPass} setShowPass={setShowPass} />
                <PrimaryButton handleClick={handleLogin} />
            </View>
        </View>

    )
}

export default Login