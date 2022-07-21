import { Text, View, StatusBar, StyleSheet, TouchableOpacity, Image } from "react-native";
import { color } from "../color";



function Profile({ navigation, route }) {
    const styles = StyleSheet.create({
        greenView: {
            flex: 0.3017,
            flexDirection: 'row',
            backgroundColor: color.primaryGreen,
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '100%',
        },
        whiteView: {
            flex: 0.6983,
            backgroundColor: 'white',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
        },
        innerGreen: {
            marginTop: 60,
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'


        },
        profileLabel: {
            fontSize: 30,
            textAlign: 'center',
            fontWeight: '600',
            color: 'white',
        },
        logoutButton: {
            position: 'absolute',
            right: 20,
            justifyContent: 'center',
            alignItems: 'center',
        }
        ,
        logoutLabel: {
            color: 'white',
            fontWeight: '400',
            fontSize: 16,
        },
        user: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 57,
            marginBottom: 69,
        },
        userName: {
            fontSize: 30,
            fontWeight: '600',
            marginBottom: 10,
        },
        address: {
            fontWeight: '600',
            fontSize: 16,
        },
        location: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        locationLabel: {
            color: '#EF3840',
            fontSize: 16,
            fontWeight: '700',
            lineHeight: 19.36,
        },
        cordinates: {
            color: 'black',
            fontSize: 16,
            fontWeight: '700',
            lineHeight: 19.36,
        }
    })
    return (
        <View style={{ zIndex: -4000, flex: 1 }}><Image style={{
            position: 'absolute', alignSelf: 'center', top: 120, shadowColor: '#202020',
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: 5, zIndex: 100
        }} source={require('../assets/avatar.png')} />
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <View style={styles.greenView}>
                    <View style={styles.innerGreen}>
                        <Text style={styles.profileLabel}>Profile</Text>
                        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.goBack()}><Text style={styles.logoutLabel}>Logout</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.whiteView}>
                    <View style={styles.user}>
                        <Text style={styles.userName}>{route.params.user.name}</Text>
                        <Text style={styles.address}>{route.params.user.city}</Text>
                    </View>
                    <View style={styles.location}>
                        <Text style={styles.locationLabel}>Your Location</Text>
                        <Text style={styles.cordinates}>Longitude</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default Profile