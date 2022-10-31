/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  FlatList,
  SectionList,
} from 'react-native';
/*
// 子コンポーネント
const Cat = (props: { name: string; }) => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Text>I am {props.name}, and I am {isHungry ? "hungry" : "full"}!</Text>
      <Button
        onPress={() => { setIsHungry(false); }} //変数を直接更新するのではなく、setter(setIsHungry)の方を更新する
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please !" : "Thank you!!"}
      />
    </View>
  )
}

// 親コンポーネント
const Cafe = () => {
  return (
    <View>
      <Text>Welcom!!</Text>
      <Cat name="Taro" />
      <Cat name="Jiro" />
      <Cat name="Shiro" />
    </View>
  );
}
export default Cafe;
*/

/*FlatList
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  item: {
    paddingTop: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: 'Devin' },
          { key: 'Dan' },
          { key: 'Dominic' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default FlatListBasics;
*/

/**
 *
 * SectionList
 */

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 20,
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1,0)',
//   },
//   item: {
//     paddingTop: 10,
//     fontSize: 18,
//     height: 44,
//   }
// })

// const SectionListBasics = () => {
//   return (
//     <View style={styles.container}>
//       <SectionList
//         sections={[
//           {
//             title: 'D',
//             data: ['Devin', 'Dan', 'Dominic']
//           },
//           {
//             title: 'J', data: ['Jack', 'James']
//           },
//         ]}
//         renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
//         renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//         keyExtractor={(item, index) => `basicListEntry-${item}`}
//       />
//     </View>
//   )
// }

// export default SectionListBasics;

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>just red</Text>
      <Text style={styles.bigBlue}>just bigBlue</Text>
      <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default LotsOfStyles;
