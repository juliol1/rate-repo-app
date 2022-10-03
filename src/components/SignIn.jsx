import Text from './Text';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import { Pressable } from 'react-native';
import theme from '../theme';
import * as yup from 'yup';

const initialValues = {
    username: '',
    password: '',
};

const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .required('Password is required'),
});

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: 'white',
    },
    buttonContainer: {
        borderRadius: 10,
        overflow: 'hidden',

        height: 50,
    },
    button: {
        height: '100%',
        width: '100%',
        textAlign: 'center',
        fontSize: theme.fontSizes.subheading,
        lineHeight: 50,
        backgroundColor: theme.colors.primary,
        color: 'white',
        fontWeight: theme.fontWeights.bold,
    },
});

const LoginForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name="username" placeholder="Username..." />
            <FormikTextInput
                name="password"
                placeholder="Password..."
                secureTextEntry={true}
            />
            <Pressable onPress={onSubmit}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.button}>Log In</Text>
                </View>
            </Pressable>
        </View>
    );
};

const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;
