import * as React from 'react';

import { StyleSheet } from 'react-native';
import { FeedbackTextInput } from 'react-native-animated-ui-components';

export default function App() {

  return (
    <FeedbackTextInput></FeedbackTextInput>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
