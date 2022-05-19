import React from 'react';
import {View, Text, TextInput, FlatList, Image} from 'react-native';
import {Dimensions, StyleSheet} from 'react-native';
import store_data from './store_data.json';

function App() {
  // const renderData = ({item}) => <Card products={item} />;
  const inStockState = 'STOKTA YOK';

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.app_title}>PATIKA STORE</Text>
        <TextInput style={styles.text_input} placeholder=" Ara..." />
      </View>
      <View>
        <FlatList
          numColumns={2}
          data={store_data}
          renderItem={({item}) => (
            <View style={styles.card_container}>
              <Image style={styles.image} source={{uri: item.imgURL}} />
              <View style={styles.text_container}>
                <Text style={styles.card_title}>{item.title}</Text>
                <Text style={styles.inner_text}>{item.price}</Text>
                {!item.inStock && (
                  <Text style={styles.in_stock_text}>{inStockState}</Text>
                )}
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app_title: {
    color: 'purple',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
  text_input: {
    color: 'gray',
    margin: 10,
    backgroundColor: 'lavender',
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 150,
    marginHorizontal: 5,
  },
  card_container: {
    flex: 1,
    backgroundColor: 'lavender',
    borderRadius: 10,
    margin: 10,
  },
  card_title: {
    fontWeight: 'bold',
    color: 'gray',
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
    margin: 10,
  },
  text_container: {
    margin: 5,
  },
  inner_text: {
    color: 'grey',
  },
  in_stock_text: {
    color: 'darkorange',
    fontWeight: 'bold',
  },
});

export default App;
