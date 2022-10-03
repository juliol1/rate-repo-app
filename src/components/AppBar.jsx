import { Pressable, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';
import { ScrollView } from 'react-native';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBar,
    },
    pressable: {
        marginBottom: 15,
        paddingLeft: 10,
        marginRight: 15,
    },
    text: {
        color: 'white',
        fontStyle: theme.fonts.main,
    },
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? 'grey'
                                : theme.colors.appBar,
                        },
                        styles.pressable,
                    ]}
                >
                    <Link to="/">
                        <Text style={styles.text}>
                            Rate Repository Application
                        </Text>
                    </Link>
                </Pressable>
                <View
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? 'grey'
                                : theme.colors.appBar,
                        },
                        styles.pressable,
                    ]}
                >
                    <Link to="/signin">
                        <Text style={styles.text}>Sign in</Text>
                    </Link>
                </View>
            </ScrollView>
        </View>
    );
};

export default AppBar;
