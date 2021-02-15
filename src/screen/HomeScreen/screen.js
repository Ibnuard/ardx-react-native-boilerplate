import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text>Go to profile</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen