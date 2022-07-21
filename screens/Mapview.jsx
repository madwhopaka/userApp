import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";

function Mapview({ navigation, route }) {
    const styles = StyleSheet.create({
        mapContainer: {
            flex: 1,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            justifyContent: 'center',
            alignItems: 'center',
        }
    })
    console.log(route.params.loc);
    return (
        <View style={styles.mapContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', left: 15, top: 45, justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}><Image style={{ height: 20, width: 20 }} source={require('../assets/return.png')} /><Text>Go Back</Text></TouchableOpacity>
            <MapView style={{ flex: 1, width: '100%' }} mapType={'satellite'} initialRegion={
                {
                    latitude: route.params.loc.lat,
                    longitude: route.params.loc.long,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }
            }><Marker coordinate={{
                latitude: route.params.loc.lat,
                longitude: route.params.loc.long,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }} /></MapView>
        </View>
    )
}

export default Mapview