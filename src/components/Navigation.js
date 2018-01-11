import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';

const Navigation = TabNavigator({
    PeopleList: { screen: PeopleList, },
    AddPerson: { screen: AddPerson, },
    CompanyList: { screen: CompanyList, },
}, {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
        activeTintColor: 'ghostwhite',
        inactiveTintColor: 'cyan',
        swipeEnabled: true,
        showIcon: true,
        allowFontScaling: true,
        iconStyle: {
            paddingHorizontal: 26,
            paddingVertical: 20,
            margin: 0
        },
        labelStyle: {
            margin: 0,
            padding: 0
        },
        indicatorStyle: {
            backgroundColor: 'ghostwhite',
            height: 5
        },
        style: {
            backgroundColor: 'darkslateblue',
            margin: 0,
        },
    },
});


export default Navigation;