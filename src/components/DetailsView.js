/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import { MKTextField, MKColor, MKButton} from 'react-native-material-kit';
import * as actions from '../actions';
import UpdatePerson from './UpdatePerson';

const theme = getTheme();

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        left: 15,
        flex: 10,
        width: 353,
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    card: {
        marginTop: 20,
        paddingBottom: 20,
        marginBottom: 20,
        borderColor: 'lightgrey',
        borderWidth: 0.5,
  },
  title1: {
      top: 10,
      left: 80,
      fontSize: 24,
      color: 'ghostwhite',
      textShadowColor:'black',
      textShadowOffset: { width: .3, height: .3 },
      textShadowRadius: 20,
  },
  title2: {
      top: 35,
      left: 82,
      fontSize: 12,
      color: 'ghostwhite',
      textShadowColor:'black',
      textShadowOffset: { width: .3, height: .3 },
      textShadowRadius: 20,
  },
  image: {
      flex: 0,
      height: 100,
      width: 334,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
  },
  closeIcon: {
      position: 'absolute',
      top: 5,
      left: 295,
      color: 'rgba(255,166,154,0.8)',
      backgroundColor: 'rgba(255,255,255,0)',
  },  
  icon: {
      position: 'absolute',
      top: 10,
      left: 0,
      color: 'white',
      backgroundColor: 'rgba(255,255,255,0)',
  },
  textArea: {
      flexDirection: 'row',
      paddingLeft: 20,
      paddingTop: 10,
      width: 270,
  },
  textIcons: {
      color: '#26a69a',
      width: 50,
      height: 50,
  },
  actionArea: {
      paddingTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    actionImage: {
        width: 75,
        height: 75
    },
  editIcon: {
      color: '#26a6e4',
  },
  sections: {
      flexDirection:  'row',
      paddingLeft: 10,
      paddingTop: 10,
      width: 100,
  },
  deleteIcon: {
      color: '#e9a69a',
  },
  editDeleteArea: {
    flexDirection:  'row',
    paddingRight: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(211,211,211, 0.3)',
    marginBottom: 10,
  },
});

class DetailsView extends Component {
    handleClick = (link) => {
        Linking.canOpenURL(link).then(suppported => {
            if (supported) {
                Linking.openURL(link);
            } else {
                console.log('Don\'t know how to open URI: ' + link);
            }
        });
    };

  render() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>      
        <View style={[theme.cardStyle, styles.card]}>
        <Image 
            source={require('../images/us_flag_bg.png')}
            style={[theme.cardImageStyle, styles.image]}
        />
        <EvilIcon name={'user'} size={100} style={styles.icon}/>
       
            <SimpleIcon name={'close'} size={30} style={styles.closeIcon}
            onPress={() => this.props.noneSelected()}
             />
       
        <Text style={[theme.cardTitleStyle, styles.title1]}>{this.props.people.first_name} {this.props.people.last_name}</Text> 
        <Text style={[theme.cardTitleStyle, styles.title2]}>from {this.props.people.company}</Text>
        <View style={styles.textArea}>
           <MaterialIcon name={'phone'} size={40} style={styles.textIcons}/>
           <Text style={theme.cardContentStyle}>{this.props.people.phone}</Text>
        </View>
        <View style={styles.textArea}>
           <MaterialIcon name={'email'} size={40} style={styles.textIcons}/>
           <Text style={theme.cardContentStyle}>{this.props.people.email}</Text>
        </View>
        <View style={styles.textArea}>
           <MaterialIcon name={'assignment'} size={40} style={styles.textIcons}/>
           <Text style={theme.cardContentStyle}>{this.props.people.project}</Text>
        </View>
        <View style={styles.textArea}>
           <MaterialIcon name={'mode-edit'} size={40} style={styles.textIcons}/>
           <Text style={theme.cardContentStyle}>{this.props.people.notes}</Text>
        </View>
        <View style={styles.editArea}>
            <TouchableOpacity style={styles.sections}
            onPress={() => {this.props.updateContact(this.props.people) }}>
               <MaterialIcon name={'autorenew'} size={40} style={styles.editIcon}/>
               <Text style={theme.cardContentStyle}>EDIT</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.sections}
                onPress={() => { this.props.deleteContact(this.props.people.uid)}}>
               <MaterialIcon name={'delete-forever'} size={40} style={styles.editIcon}/>
               <Text style={theme.cardContentStyle}>DELETE</Text>
            </TouchableOpacity> 
        </View>
        <View style={styles.actionArea}>
            <TouchableOpacity
                onPress={() => { this.handleClick(`tel:${this.props.people.phone}`)}}
            >
                <Image source={require('../images/call2x.png')} style={styles.actionImage}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { this.handleClick(`sms:${this.props.people.phone}`)}}
            >
                <Image source={require('../images/sms2x.png')} style={styles.actionImage}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { this.handleClick(`mailto:${this.props.people.email}`)}}
            >
                <Image source={require('../images/email2x.png')} style={styles.actionImage}/>
            </TouchableOpacity>
        </View>
        <View style={styles.actionArea}>
            <Text>Call</Text>
            <Text>SMS</Text>
            <Text>Email</Text>
        </View>
                </View>
        </View>        
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return { 
      people: state.personSelected,
      
   };
};

export default connect(mapStateToProps, actions)(DetailsView);