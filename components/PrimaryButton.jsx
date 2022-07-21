import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { color } from "../color";

export default function PrimaryButton({ handleClick }) {
    const styles = StyleSheet.create({
        buttonContainer: {
            position: 'absolute',
            left: 16,
            top: 321,
            width: 355,
            paddingHorizontal: 32,
            paddingVertical: 16,
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
