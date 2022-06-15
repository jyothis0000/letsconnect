import React from 'react';
import { View, StyleSheet ,FlatList} from 'react-native';

import Card  from '../App/components/Cards';
const DATA= [
    {
      id: 1,
      Name: "jesse name",
    service:"connect people",
Image:require('../assets/sas.jpg')

    },
    {
      id: 2,
      Name: "jim",
      service:"connect people",
      Image:require('../assets/sas.jpg')
    }, {
      id: 3,
      Name: "john",
    service:"connect people",
    Image:require('../assets/sas.jpg')
    },
    {
      id: 4,
      Name: "jack",
    service:"connect people",
    Image:require('../assets/sas.jpg')
    },
    
  ];
function MyConnections({navigation}) {
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
 imagesUrl={item.Image}
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

    backgroundColor:"#E5E5E5",
    flex:1,
  }
});

export default MyConnections;