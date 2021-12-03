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

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={[styles.container]}>
          <Text style={[styles.wording]}>React Native</Text>
          <Image
            style={[styles.image]}
            source={{
              uri: 'https://images.pexels.com/photos/10012748/pexels-photo-10012748.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
          />
          <Text style={[styles.wordingImage]}>Ini gambar</Text>
          <View style={{padding: 40}}>
            <Button
              title="Go to Detail"
              onPress={() => navigation.navigate('Detail')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  wording: {
    fontSize: 30,
  },
  wordingImage: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
});

export default Home;
