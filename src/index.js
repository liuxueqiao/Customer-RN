import React from 'react';
import {Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './pages/home/Home';
import Mine from './pages/mine/Mine';
import {Icons} from './resources/icons/index';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      backBehavior={'initialRoute'}
      tabBarOptions={{
        allowFontScaling: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: (a) => tabBarLabel('首页', a),
          tabBarIcon: (a) => tabBarIcon(Icons.tab_home, Icons.tab_home_s, a),
        }}
      />
      <Tab.Screen
        name="Mine"
        component={Mine}
        options={{
          tabBarLabel: (a) => tabBarLabel('我的', a),
          tabBarIcon: (a) => tabBarIcon(Icons.tab_mine, Icons.tab_mine_s, a),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const tabBarLabel = (label, {focused}) => {
  const tabText = {
    fontSize: 10,
    color: focused ? '#333' : '#999',
    textAlign: 'center',
  };
  return (
    <Text allowFontScaling={false} style={tabText}>
      {label}
    </Text>
  );
};

const tabBarIcon = (defaultIcon, activeIcon, {focused}) => {
  const tabTextSelect = {
    width: 20,
    height: 20,
  };
  return (
    <Image
      style={tabTextSelect}
      source={focused ? activeIcon : defaultIcon}
      resizeMode="contain"
    />
  );
};
