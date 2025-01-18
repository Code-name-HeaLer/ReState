import React from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import images from '@/constants/images'
import icons from '@/constants/icons'
import { login } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/global-provider'
import { Redirect } from 'expo-router'

const SignIn = () => {

    const { refetch, loading, isLoggedIn} = useGlobalContext();

    if(!loading && isLoggedIn) return <Redirect href={'/'}/>

    const handleLogin = async () => {
        const result = await login();

        if (result) {
            refetch();
        } else {
            Alert.alert('Error', 'Failed to Login');
        }

    };

    return (
        <SafeAreaView className='bg-white h-full'> 
            <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className='w-full h-4/6' resizeMode='contain'/>
        <View className='px-10'>
        <Text className='text-base text-center uppercase font-rubik text-black-200'>Welcome to Rellu</Text>

        <Text className='text-2xl font-rubik-bold text-black-300 text-center mt-2'>
        Let's Get You Closer to {'\n'}
        <Text className='text-primary-300'>Your Ideal Home</Text>
        </Text>

        <Text className='text-lg font-rubik text-black-200 text-center mt-9'>Login to Rellu with Google</Text>

        <TouchableOpacity onPress={handleLogin} className='bg-white rounded-full w-full py-3 mt-4'
        style={{
            shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2, // Subtle vertical offset for better balance
    },
    shadowOpacity: 0.15, // Increased opacity for better visibility
    shadowRadius: 4, // Larger radius for more spread
    elevation: 4, // Consistent shadow depth for Android
          }}>

        <View className='flex flex-row items-center justify-center'>
        <Image 
        source={icons.google} 
        className='w-5 h-5' 
        resizeMode='contain'
        />
        <Text className='text-lg font-rubik-medium text-black-300 ml-2 mt-1'>Continue with Google</Text>
        </View>

        

        </TouchableOpacity>

        </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn
