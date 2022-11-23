/* eslint-disable prettier/prettier */
import { View, Text, Image, TextInput, Pressable, Button, Alert } from 'react-native';
import React from 'react';
import { MotiImage, MotiView } from 'moti';

export default function App() {

  return (
    <View style={{ paddingVertical: 20, backgroundColor: 'white', height: '100%' }}>
      <MotiView
        from={{
          translateY: -100,
        }}
        animate={{
          translateY: 0,
        }}
        transition={{
          type: 'timing',
          duration: 1500,
          delay: 100,
        }}
        style={{ alignItems: 'center' }}

      >
        <Image
          shadow={2}
          source={require('./src/Image/logo-c.png')}
          alt="Alternate Text"
        />
      </MotiView>
      <MotiView
        from={{
          translateY: 0,
        }}
        animate={{
          translateY: 50,
        }}
        transition={{
          type: 'timing',
          duration: 1500,
          delay: 100,
        }}
        style={{ width: '90%', marginHorizontal: 20, }}>
        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10
          }}
          placeholder="Enter Email"
        />
        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10
          }}
          placeholder="Enter Email"
        />
        <View style={{ alignSelf: 'flex-end', paddingHorizontal: 10 }} >
          <Pressable w='20%'>
            <Text color="grey" fontSize={15}>
              Forgot ?
            </Text>
          </Pressable>
        </View>
        <View style={{ alignItems: 'center', marginVertical: 20 }}>
          <View style={{ width: '50%', }}>
            <Button
              color={'#FFD633'}
              title="SIGN UP"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
        </View>
      </MotiView>
    </View>
  )
}
