import * as React from 'react';
import { FlatList, Image, Pressable, StyleSheet } from 'react-native';
import { Text} from '../../components/Themed';
import styles from './styles'
import categories from '../../assets/data/categories'
import { useNavigation } from '@react-navigation/native';

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

    const navigation = useNavigation()

    const onMoviePress = (movie) =>{
        // console.warn(movie.id)
        navigation.navigate('MovieDetailsScreen',{id: movie.id})
    }

  return (
    <>
        <Text style={styles.title}>{category.title}</Text>
        <FlatList
            data={category.movies}
            renderItem={({item})=>(
                // we are placeing navigation here because
                // so we are using pressable
                <Pressable onPress={()=> onMoviePress(item)}>
                    <Image style={styles.image} source={{uri: item.poster}}/>
                </Pressable>
               
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
        />

      
    </>
  );
}

export default HomeCategory;
