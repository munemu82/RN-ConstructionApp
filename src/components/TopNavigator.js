import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();


const TopNavigator = (props) => {
  return (
    
    <Tab.Navigator
        initialRouteName={props.initialRouteName} 
        activeColor={props.activeColor}
        inactiveColor={props.inactiveColor}
    >
       {props.screens.map((s, key)=> 
        (
            <Tab.Screen 
                key={key}
                name={s.name} 
                //component={s.component} 
                /* options={{ 
                  tabBarIcon: () =>s.icon,
                }} */
                screenOptions={{
                  tabBarStyle: { marginTop: 0, padding: 0}  ,
                }}
                options={{
                  tabBarLabel: s.tabBarLabel,
                  tabBarIcon: ({ focused }) =>
                    focused ? (
                      s.Focusedicon
                    ) : (
                      s.icon
                    ),
                }}
            >
               { 
                  props => <s.component 
                  {...props} userData={s.userData}  
                 
                  />
                  
              }
              </Tab.Screen>
        )
        )
       } 
    </Tab.Navigator>
  );
}

export default TopNavigator;