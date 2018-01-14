import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';


const theme = getTheme();

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        paddingTop: 20,
        
      },
  card: {
      marginTop: 20,
      alignItems: 'center',
  },
  title: {
    top: 15,
    left: 105,
    fontSize: 24,
    color: 'ghostwhite',
    textShadowColor:'black',
    textShadowOffset: { width: .3, height: .3 },
    textShadowRadius: 20,
      margin: 0,
    },
  image: {
      width: 343,
      height: 100,
    },
    action: {
        backgroundColor: 'darkgray',
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        width: 343
    },
  icon: {
      position: 'absolute',
      top: 10,
      left: 20,
      color: 'white',
      backgroundColor: 'rgba(255,255,255,0)',
  },
});

const CompanyItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={[theme.cardStyle, styles.card]}>
                <Image
                    source={require('../images/us_flag_bg.png')}
                    style={[theme.cardImageStyle, styles.image]}
                />
                <Icon
                    name={'business'}
                    size={80} 
                    style={styles.icon}
                />
                <Text style={[theme.cardTitleStyle, styles.title]}>{props.companies.company}</Text>
                {props.companies.names.map((name) => {
                    return (
                        <Text key={name.uid} style={[theme.cardActionStyle, styles.action]}>
                            {name.first_name} {name.last_name} - Project: {name.project}
                        </Text>
                    );
                })}
            </View>
        </View>
    );
};

export default CompanyItem;