import { View, Image, Text, StyleSheet } from 'react-native';
import theme from '../theme';

const RepositoryItem = ({ item }) => {
    const styles = StyleSheet.create({
        flexRow: {
            display: 'flex',
            flexDirection: 'row',
            padding: 14,
            alignItems: 'center',
            // flexWrap: 'wrap',
        },
        avatar: {
            width: 50,
            height: 50,
            marginRight: 14,
            alignSelf: 'flex-start',
        },
        rating: {
            justifyContent: 'space-around',
        },
        container: {
            backgroundColor: 'white',
        },
        languageTag: {
            backgroundColor: theme.colors.primary,
            color: 'white',
            border: 2,
            borderRadius: '10%',
            textAlign: 'center',
            padding: 5,
            height: 26,
            alignSelf: 'flex-start',
            overflow: 'hidden',
        },
        title: {
            fontFamily: theme.fonts.main,
            fontSize: theme.fontSizes.subheading,
            marginBottom: 6,
        },
        subtitle: {
            marginBottom: 6,
        },
        primary: {
            fontWeight: theme.fontWeights.bold,
            color: theme.colors.textPrimary,
            fontFamily: theme.fonts.main,
        },
        secondary: {
            fontWeight: theme.fontWeights.normal,
            color: theme.colors.textSecondary,
        },
        extraRightPadding: {
            paddingRight: 10,
        },
        shrink: {
            flexShrink: 1,
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.flexRow}>
                <View>
                    <Image
                        style={styles.avatar}
                        source={{ uri: item.ownerAvatarUrl }}
                    />
                </View>
                <View style={[styles.extraRightPadding, styles.shrink]}>
                    <Text style={[styles.title, styles.primary]}>
                        {item.fullName}
                    </Text>
                    <Text style={[styles.secondary, styles.subtitle]}>
                        {item.description}
                    </Text>
                    <Text style={styles.languageTag}>{item.language}</Text>
                </View>
            </View>
            <View style={[styles.flexRow, styles.rating]}>
                <View>
                    <Text style={styles.primary}>
                        {item.stargazersCount > 1000
                            ? `${(item.stargazersCount / 1000).toFixed(1)}k`
                            : item.stargazersCount}
                    </Text>
                    <Text style={styles.secondary}>Stars</Text>
                </View>
                <View>
                    <Text style={styles.primary}>
                        {item.forksCount > 1000
                            ? `${(item.forksCount / 1000).toFixed(1)}k`
                            : item.forksCount}
                    </Text>
                    <Text style={styles.secondary}>Forks</Text>
                </View>
                <View>
                    <Text style={styles.primary}>
                        {item.reviewCount > 1000
                            ? `${(item.reviewCount / 1000).toFixed(1)}k`
                            : item.reviewCount}
                    </Text>
                    <Text style={styles.secondary}>Reviews</Text>
                </View>
                <View>
                    <Text style={styles.primary}>
                        {item.ratingAverage > 1000
                            ? `${(item.ratingAverage / 1000).toFixed(1)}k`
                            : item.ratingAverage}
                    </Text>
                    <Text style={styles.secondary}>Rating</Text>
                </View>
            </View>
        </View>
    );
};

export default RepositoryItem;
