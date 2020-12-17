import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Mine = () => {
  return (
    <View style={styles.container}>
      <Text>个人中心</Text>
    </View>
  );
};

export default Mine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
