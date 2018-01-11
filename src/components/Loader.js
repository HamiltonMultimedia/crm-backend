/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center',
      },
});

const Loader = ({ size }) => {
    return (
        <View style={styles.container}>
        <View style={styles.loader}>
            <ActivityIndicator size={size || 'small'} />
        </View> 
        </View>
        );
};

export default Loader;