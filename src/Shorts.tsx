import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';

const Shorts = () => {
  const {height, width} = useWindowDimensions();

  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log('------------->', height);

  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <FlatList
        pagingEnabled
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
                // width: '100%',
                // position: 'relative',
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
            // ------------------
            // <View style={{flex: 1}}>
            //   <View
            //     style={{
            //       // position: 'absolute',
            //       // top: 0,
            //       // left: 0,
            //       // bottom: 0,
            //       // right: 0,
            //       height: height,
            //       borderWidth: 2,
            //       backgroundColor: 'red',
            //     }}></View>
            // </View>
          );
        }}
      />
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
