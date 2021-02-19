import * as React from 'react'
import { View, Text } from 'react-native'
import Button from '../../component/Button/component'
import styles from './styles'

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <Button title={'Test'} mode={'outlined'} onPress={() => console.log('Button Clicked')} />
        </View>
    )
}

export default ProfileScreen