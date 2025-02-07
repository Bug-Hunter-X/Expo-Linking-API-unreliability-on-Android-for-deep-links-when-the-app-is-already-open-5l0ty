```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrl = async (event) => {
      console.log('Event listener triggered with URL:', event.url);
    };

    Linking.addEventListener('url', handleUrl);

    const getInitialUrl = async () => {
      const initialUrl = await Linking.getInitialURL();
      if (initialUrl) {
        console.log('Initial URL:', initialUrl);
      }
      setInitialUrl(initialUrl);
    };

    getInitialUrl();

    return () => {
      Linking.removeEventListener('url', handleUrl);
    };
  }, []);

  return (
    <View>
      {initialUrl ? <Text>App launched with initial URL: {initialUrl}</Text> : null}
    </View>
  );
}
```