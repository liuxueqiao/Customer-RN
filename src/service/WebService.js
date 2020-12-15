/**
 *  网络请求
 */
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {XHttp} from 'react-native-easy-app';
import Toast from 'teaset/components/Toast/Toast';

class WebService {
  loadingKey;
  config = {
    showLoading: true,
    way: 'POST',
  };
  response;
  path;

  showLoading = (show) => {
    if (show) {
      //显示loading
      this.loadingKey = 'path:' + this.path;
      this.loadingKey = Toast.show({
        icon: () => {
          <View style={styles.container}>
            <ActivityIndicator size="large" color="white" />
          </View>;
        },
        position: 'top',
        duration: 2 * 60 * 1000,
      });
    } else {
      //隐藏loading
      if (this.loadingKey) {
        Toast.hide(this.loadingKey);
      }
    }
  };

  request = async (path, params, config) => {
    this.path = path;
    if (config) {
      this.config = config;
    }

    //请求接口
    this.response = await XHttp()
      .url(path)
      .param(params)
      .loadingFunc((loading) => this.showLoading(loading))
      .execute('POST');

    return Promise.resolve(this.response);
  };
}

export default WebService;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
