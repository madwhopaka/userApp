import { Text, View, StatusBar, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import { color } from "../color";
import { useEffect, useState } from "react";
import * as Location from "expo-location";


var foregroundSubscription = null;

function Profile({ navigation, route }) {
    const [loc, setLocation] = useState({ lat: '', long: '' });

    const watchLocationChange = async () => {
        // Check if foreground permission is granted
        const { status } = await Location.getForegroundPermissionsAsync()
        if (status != 'granted') {
            console.log("location tracking denied");
            return
        }

        foregroundSubscription?.remove()
        foregroundSubscription = await Location.watchPositionAsync(
            {

                accuracy: Location.Accuracy.BestForNavigation,
                timeInterval: 2000,
                distanceInterval: 1,
            },
            location => {
                setLocation({ lat: location.coords.latitude, long: location.coords.longitude });
                console.log(loc.lat, loc.long);
            }
        )
    }
    useEffect(() => {
        watchLocationChange();
        return () => {
            foregroundSubscription?.remove();
        }
    }, []);

    return (
        <View style={{ zIndex: -4000, flex: 1 }}><Image style={{
            position: 'absolute', alignSelf: 'center', top: Dimensions.get('window').height * 0.1488, shadowColor: '#202020',
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: 5, zIndex: 100
        }} source={require('../assets/avatar.png')} />
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <View style={styles.greenView}>
                    <View style={styles.innerGreen}>
                        <Text style={styles.profileLabel}>Profile</Text>

                        <TouchableOpacity style={styles.logoutButton} onPress={() => { foregroundSubscription?.remove(); navigation.goBack(); }}><Text style={styles.logoutLabel}>Logout</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.whiteView}>
                    <View style={styles.user}>
                        <Text style={styles.userName}>{route.params.user.name}</Text>
                        <Text style={styles.address}>{route.params.user.city}</Text>
                    </View>
                    <View style={styles.location}>
                        <Text style={styles.locationLabel}>Your Location</Text>
                        {loc.lat != "" && loc.long != "" ? <TouchableOpacity activeOpacity={0.8} onPress={() => {
                            foregroundSubscription?.remove();
                            navigation.navigate('Mapview', { loc: loc })
                        }}><Text style={styles.cordinates}>{loc.lat + "N, " + loc.long + "E"}</Text></TouchableOpacity> : <Text>Location Loading...!</Text>}
                    </View>
                </View>

            </View>
        </View >
    )
}

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
        marginTop: Dimensions.get('window').height * 0.0744,  // 60 
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
        right: Dimensions.get('window').width * 0.051,
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
        marginTop: Dimensions.get('window').height * 0.071,           //57       
        marginBottom: Dimensions.get('window').height * 0.0856,                 //69
    },
    userName: {
        fontSize: 30,
        fontWeight: '600',
        marginBottom: Dimensions.get('window').height * 0.0124,
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

export default Profile;