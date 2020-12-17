import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text>首页</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
  },
});
