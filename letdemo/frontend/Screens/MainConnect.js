import React from 'react';
import { View, StyleSheet ,FlatList} from 'react-native';

import Card from '../App/components/Cards';
const DATA= [
    {
      id: 1,
      Name: "SAM",
    service:"Connect people",

    },
    {
      id: 2,
      Name: "RAM",
      service:"Connect people"
    }, {
      id: 3,
      Name: "SUNNY",
    service:"Connect people"
    },
    {
      id: 4,
      Name: "JYOTHIS",
    service:"Connect people"
    },
    
  ];
function MainConnect({navigation}) {
  return (
    <View style={styles.container}>

<FlatList 
data={DATA}
keyExtractor={(DATA) => DATA.id.toString()}
renderItem={({ item }) => (
  <Card
    title={item.service}
    subTitle={ item.Name}
 address={item.address}
onPress={()=>navigation.navigate('Connect',item)}
    
  />
)}
>

</FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor:"grey",
    flex:1,
  }
});

export default MainConnect;