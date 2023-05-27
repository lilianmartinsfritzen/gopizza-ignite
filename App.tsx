import React from 'react';
// import type {PropsWithChildren} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ThemeProvider} from 'styled-components';

import theme from './src/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text>Hello World</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
