import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import Shorts from './src/Shorts';
import {FlatList} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const {height, width} = useWindowDimensions();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar />
        {/* <Shorts /> */}
        {/* <ScrollView style={{flex: 1}} pagingEnabled>
        <View
          style={{
            width,
            height,
            backgroundColor: 'red',
            borderWidth: 2,
          }}></View>
      </ScrollView> */}
        <View style={{height}}>
          <Shorts />

          {/* <FlatList
          data={[1, 2, 4, 5]}
          pagingEnabled
          style={{height}}
          renderItem={() => (
            <View
              style={{
                flex: 1,
                height,
                backgroundColor: 'red',
                borderWidth: 2,
              }}></View>
          )}
        /> */}
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
