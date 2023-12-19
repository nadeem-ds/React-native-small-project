/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { LogBox } from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  useEffect(()=>{
    // LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
  },[])
  const isDarkMode = useColorScheme() === 'dark';
  const DATA = [
    {
      id:1,
      name:"Nad",
      

    },
    {
      id:2,
      name:"Nad",
      

    },
    {
      id:3,
      name:"Nad",
      

    },
    {
      id:4,
      name:"Nad",
      

    },
    {
      id:5,
      name:"Nad",
      

    },
    {
      id:6,
      name:"Nad",
      

    },
    {
      id:7,
      name:"Nad",
      

    },
    {
      id:8,
      name:"Nad",
      

    },
    {
      id:9,
      name:"Nad 9",
      

    },
    {
      id:10,
      name:"Nad 10",
      

    },
  ]

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
     <Text style={{color:"green",textAlign:"center",fontSize:20,justifyContent:"center",alignItems:"center",margin:12,padding:12,lineHeight:30}}>
      Congrtation nadeem today you successfully setup the projectMd Khan Sahab  Nadeem Anwar project is running on iso device and from today  i will creata project on mac book pro max developer
      </Text>

<ScrollView>
      <FlatList
      style={{margin:12,padding:12}}
      data={DATA}
      renderItem={({item})=><Text style={{borderWidth:1,marginVertical:12,padding:12,borderRadius:10,color:"green",fontSize:18,borderColor:"green",textAlign:"center"}}>{item.name}</Text>}
      // keyExtractor={(item)=>item.id}
      />
</ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
