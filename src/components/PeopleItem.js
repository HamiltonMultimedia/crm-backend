import React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';

const theme = getTheme();

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
        alignItems: 'center'  
  },
    title: {
      top: 15,
      left: 105,
      fontSize: 24,
      color: 'ghostwhite',
      textShadowColor:'black',
      textShadowOffset: { width: .3, height: .3 },
      textShadowRadius: 20,
        flexWrap: 'wrap',
      margin: 0
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

const PeopleItem = (props) => {
    return (
        <TouchableWithoutFeedback 
            onPress={() => props.selectPerson(props.people)}
        >
            <View style={[theme.cardStyle, styles.card,]}>
                <Image
                    source={require('../images/us_flag_bg.png')}
                    style={[theme.cardImageStyle, styles.image]}
                />
                <Icon
                    name={'user'}
                    size={100} 
                    style={styles.icon}
                />
                <Text style={[theme.cardTitleStyle, styles.title,]}>{props.people.first_name} {props.people.last_name}</Text>
                <Text style={[theme.cardActionStyle, styles.action]}>{props.people.company}</Text>
            </View>
        </TouchableWithoutFeedback>           
    );
};

export default connect(null, actions)(PeopleItem);