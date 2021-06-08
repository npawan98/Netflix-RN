import * as React from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';
import { Text} from '../../components/Themed';
import styles from './styles'
import categories from '../../assets/data/categories'

// const firstCategory = categories.items[0]

interface HomeCategoryProps {

    category: {
        id: string;
        title: string;
        movies: {
            id:string,
            poster:string
        }[]
    }
    
}
// in Ts we need to add props like this 
const HomeCategory = (props:HomeCategoryProps) => {
    const {category} = props;
  return (
    <>
        <Text style={styles.title}>{category.title}</Text>
        <FlatList
            data={category.movies}
            renderItem={({item})=>(
                <Image style={styles.image} source={{uri: item.poster}}/>
            )}
            horizontal
        />

      
    </>
  );
}

export default HomeCategory;
