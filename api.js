const URL = 'http://my-json-server.typicode.com/gowtham3105/react-native-test/profile/2';

export const login = async () => {
    const resp = await fetch(URL);
    if (resp.status == 200) {
        const data = await resp.json();
        return data;
    }
}