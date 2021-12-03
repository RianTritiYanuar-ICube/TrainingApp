import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  Alert,
} from 'react-native';

const Detail = () => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.wording]}>Detail Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wording: {
    fontSize: 30,
  },
});

export default Detail;
