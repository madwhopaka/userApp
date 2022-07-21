import { View, TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import { color } from "../color";

function InputField(props) {
    const styles = StyleSheet.create({
        inputContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
            width: '100%',
            width: 355,
            paddingVertical: 10,
            paddingHorizontal: 15,
            height: 50,
            backgroundColor: '#F6F6F6',
            borderWidth: 1,
            borderColor: '#E8E8E8',
            borderRadius: 8,
        },

        input: {
            fontSize: 16,
            fontWeight: '500',
            lineHeight: 19,
            width: props.password ? 280 : '100%',
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
        <View style={styles.inputContainer}><TextInput {...props} placeholderTextColor={'#BDBDBD'} style={styles.input}></TextInput>{props.password && <TouchableOpacity activeOpacity={0.6} onPress={() => props.setShowPass(!props.showPass)} style={styles.showPassword}>
            <Text style={styles.showButton}>{props.showPass === false ? 'Show' : 'Hide'}</Text></TouchableOpacity>}</View>
    )
}

export default InputField