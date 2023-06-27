import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Video from 'react-native-video';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import {TapGesture} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/tapGesture';
import {TapGestureHandler} from 'react-native-gesture-handler';

const ImageComponent = Animated.createAnimatedComponent(Image);

const Shorts = () => {
  const {height, width} = useWindowDimensions();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const scale = useSharedValue(0);
  const doubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, isFinished => {
      if (isFinished) {
        scale.value = withDelay(300, withSpring(0));
      }
    });
    console.log('------ is Liked ------>', 'True');
  }, []);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: Math.max(scale.value, 0)}],
    };
  });
  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <FlatList
        pagingEnabled
        scrollEnabled
        showsVerticalScrollIndicator={false}
        onScroll={e =>
          setSelectedIndex(Math.ceil(e.nativeEvent.contentOffset.y / height))
        }
        style={{flex: 1, backgroundColor: 'orange'}}
        data={[
          require('./video1.mp4'),
          require('./video2.mp4'),
          require('./video3.mp4'),
          require('./video4.mp4'),
          require('./video1.mp4'),
        ]}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                height: height,
                backgroundColor: '#000',
              }}>
              <Video
                source={item}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  backgroundColor: '#000',
                }}
                resizeMode="cover"
                repeat
                paused={selectedIndex == index ? false : true}
              />
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  right: 0,
                  left: 0,
                  // backgroundColor: 'rgba(0,0,0,0.9)',
                }}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginHorizontal: 15,
                    marginTop: 10,
                  }}>
                  <Text
                    style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
                    Reels
                  </Text>
                  <Image
                    source={require('./camera.png')}
                    style={{width: 35, height: 35, tintColor: '#fff'}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    height: '40%',
                    width: '100%',
                    position: 'absolute',
                    bottom: 0,
                  }}>
                  <View style={{width: '85%', position: 'absolute', bottom: 0}}>
                    <View style={{marginTop: 100}} />
                    <View
                      style={{
                        margin: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          height: 40,
                          width: 40,
                          backgroundColor: '#fff',
                          borderRadius: 20,
                        }}
                      />
                      <Text style={{color: '#fff', marginLeft: 5}}>
                        artbyveer
                      </Text>
                      <View
                        style={{
                          marginLeft: 10,
                          padding: 3,
                          paddingHorizontal: 10,
                          borderWidth: 1,
                          borderColor: '#FFF',
                          borderRadius: 5,
                        }}>
                        <Text style={{color: '#fff'}}>Follow</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        margin: 10,
                      }}>
                      <Text style={{color: '#fff'}}>
                        Save these awesome chrome extenstions fo...
                      </Text>
                      <Text style={{color: '#fff'}}>ismaity . GOAT</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: '15%',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      position: 'absolute',
                      right: 0,
                      bottom: 0,
                      height: '80%',
                    }}>
                    <View>
                      <Image
                        source={require('./heart.png')}
                        style={{width: 25, height: 25, tintColor: '#fff'}}
                      />
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 10,
                          textAlign: 'center',
                        }}>
                        19.3K
                      </Text>
                    </View>
                    <View>
                      <Image
                        source={require('./chat.png')}
                        style={{width: 25, height: 25, tintColor: '#fff'}}
                      />
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 10,
                          textAlign: 'center',
                        }}>
                        71
                      </Text>
                    </View>
                    <View>
                      <Image
                        source={require('./send.png')}
                        style={{width: 25, height: 25, tintColor: '#fff'}}
                      />
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 10,
                          textAlign: 'center',
                        }}>
                        9,851
                      </Text>
                    </View>
                    <View>
                      <Image
                        source={require('./dots.png')}
                        style={{width: 25, height: 25, tintColor: '#fff'}}
                      />
                    </View>
                    <View>
                      <Image
                        source={require('./music.png')}
                        style={{width: 25, height: 25, tintColor: '#fff'}}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
      <TapGestureHandler
        maxDelayMs={550}
        numberOfTaps={2}
        onActivated={doubleTap}>
        <Animated.View
          style={{
            position: 'absolute',
            height,
            width,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ImageComponent
            source={require('./heart.png')}
            style={[
              {width: 100, height: 100, tintColor: '#fff'},
              animatedStyle,
            ]}
          />
        </Animated.View>
      </TapGestureHandler>
    </View>
  );
};

export default Shorts;

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: '100%',
  },
});
