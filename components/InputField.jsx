import { View, TextInput, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import { color } from "../color";


function InputField(props) {
    console.log(Dimensions.get('window').height, Dimensions.get('window').width);
    const styles = StyleSheet.create({
        inputContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: Dimensions.get('window').height * 0.02,
            width: Dimensions.get('window').width * 0.903,
            paddingVertical: Dimensions.get('window').width * 0.0255,
            paddingHorizontal: 15,
            height: Dimensions.get('window').height * 0.062,
            backgroundColor: '#F6F6F6',
            borderWidth: 1,
            borderColor: '#E8E8E8',
            borderRadius: 8,
        },

        input: {
            fontSize: 16,
            fontWeight: '500',
            lineHeight: 19,
            width: props.password ? Dimensions.get('window').width * 0.713 : '100%',
        },
        showPassword: {
            textAlign: 'center',
            justifyContent: 'center',
        },
        showButton: {
            color: color.primaryGreen,
            fontWeight: '500',
            lineHeight: 19,
            fontSize: 16,
        }

    })
    return (
        <View style={styles.inputContainer}><TextInput {...props} value={props.v} placeholderTextColor={'#BDBDBD'} style={styles.input}></TextInput>{props.password && <TouchableOpacity activeOpacity={0.6} onPress={() => props.setShowPass(!props.showPass)} style={styles.showPassword}>
            <Text style={styles.showButton}>{props.showPass === false ? 'Show' : 'Hide'}</Text></TouchableOpacity>}</View>
    )
}

export default InputField