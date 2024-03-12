import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, NativeEventEmitter } from 'react-native';
import Voice from '@react-native-voice/voice'; // Importing Voice module

export default function SpeechToText() {
    const [isRecording, setIsRecording] = useState(false);
    const [recognizedText, setRecognizedText] = useState('');

    useEffect(() => {
        // Set up event listeners for speech recognition
        const eventEmitter = new NativeEventEmitter(Voice); // Create NativeEventEmitter with Voice module
        const speechStartListener = eventEmitter.addListener(
            'onSpeechStart',
            onSpeechStart
        );
        const speechEndListener = eventEmitter.addListener(
            'onSpeechEnd',
            onSpeechEnd
        );
        const speechResultsListener = eventEmitter.addListener(
            'onSpeechResults',
            onSpeechResults
        );

        return () => {
            // Clean up event listeners when component unmounts
            speechStartListener.remove();
            speechEndListener.remove();
            speechResultsListener.remove();
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);

    const onSpeechStart = () => {
        setIsRecording(true);
    };

    const onSpeechEnd = () => {
        setIsRecording(false);
    };

    const onSpeechResults = (event) => {
        setRecognizedText(event.value[0]);
    };

    const startSpeechRecognition = async () => {
        try {
            await Voice.start('en-US');
        } catch (error) {
            console.error('Error starting speech recognition:', error);
        }
    };

    const stopSpeechRecognition = async () => {
        try {
            await Voice.stop();
        } catch (error) {
            console.error('Error stopping speech recognition:', error);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>Speech to Text</Text>
            <TouchableOpacity
                style={{ padding: 10, backgroundColor: 'lightblue', marginBottom: 20 }}
                onPress={isRecording ? stopSpeechRecognition : startSpeechRecognition}
            >
                <Text>{isRecording ? 'Stop Recording' : 'Start Recording'}</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, textAlign: 'center' }}>
                {recognizedText || 'No speech recognized'}
            </Text>
        </View>
    );
}
