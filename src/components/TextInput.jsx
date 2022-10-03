import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        fontFamily: theme.fonts.main,
        color: theme.colors.tertiary,
        fontSize: theme.fontSizes.subheading,
    },
    container: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: theme.colors.tertiary,
        padding: 10,
        height: 50,
        marginBottom: 10,
    },
    errorContainer: {
        borderColor: theme.colors.error,
    },
});
const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [
        styles.container,
        error && styles.errorContainer,
        styles.text,
        style,
    ];

    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
