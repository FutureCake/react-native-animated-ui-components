import React from "react";
import { Text, TextInput, View } from "react-native";

interface FeedbackTextInputProps {

}

function FeedbackTextInput(props: FeedbackTextInputProps) {

    return (
        <View>
            <Text></Text>
            <TextInput placeholder="Yoooo"></TextInput>
            <Text></Text>
        </View>
    );
}

export { FeedbackTextInput, FeedbackTextInputProps };

