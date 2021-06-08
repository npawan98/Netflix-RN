import * as React from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import styles from './styles'
import categories from '../../assets/data/categories'
import HomeCategory from '../../components/HomeCategory';

const firstCategory = categories.items[3]

const HomeScreen = () => {
  return (
    <View style={styles.container}>
       {/* list of Categories */}
       
        <FlatList
            data={categories.items}
            renderItem={ ({item})=>(
                <HomeCategory category={item}/>
            )}
            showsVerticalScrollIndicator={false}
        />

      
    </View>
  );
}

export default HomeScreen;
