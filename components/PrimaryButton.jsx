import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import { color } from "../color";

export default function PrimaryButton({ handleClick }) {
    const styles = StyleSheet.create({
        buttonContainer: {
            position: 'absolute',
            left: Dimensions.get('window').width * 0.041,
            top: Dimensions.get('window').height * 0.399,
            width: Dimensions.get('window').width * 0.903,
            paddingHorizontal: Dimensions.get('window').width * 0.0815,
            paddingVertical: Dimensions.get('window').height * 0.01985,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            flexDirection: 'row',
            backgroundColor: color.primaryGreen,
        },
        buttonText: {
            color: 'white',
            fontSize: 16,
            fontWeight: '600',
        }
    })
    return (
        <TouchableOpacity onPress={handleClick} activeOpacity={0.7} style={styles.buttonContainer}><Text style={styles.buttonText}>Log in</Text></TouchableOpacity>
    )
}
