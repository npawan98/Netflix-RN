import React, { useState } from 'react'
import { View, Text, Image, Pressable, FlatList } from 'react-native'
import styles from './styles'
import movie from '../../assets/data/movie'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import EpisodeItem from '../../components/EpisodeItem';
import { Picker } from '@react-native-picker/picker';

const firstSeason = movie.seasons.items[0]
const firstEpisode = movie.seasons.items[0].episodes.items[0]

const MovieDetailsScreen = () => {

    const [currentSeason,setCurrentSeason] = useState(firstSeason)

    const seasonNames = movie.seasons.items.map(season =>season.name);
    return (
        <View>
            <Image style={styles.image} source={{ uri: firstEpisode.poster }} />


            <FlatList
                style={{ marginBottom: 210 }}
                // data={firstSeason.episodes.items}
                data={currentSeason.episodes.items}
                ListHeaderComponent={(
                    <View style={{ padding: 12 }}>

                        <Text style={styles.title}>{movie.title}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.match}>98% match</Text>
                            <Text style={styles.year}>{movie.year}</Text>
                            <View style={styles.ageContainer}>
                                <Text style={styles.age}>12+</Text>
                            </View>
                            <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                            <MaterialIcons name="hd" size={24} color="white" />
                        </View>

                        {/* buttons */}
                        <Pressable onPress={() => { console.warn('play') }} style={styles.playButton}>
                            <Text style={styles.playButtonText}>
                                <Entypo name="controller-play" size={16} color="black" />
                                {' '}
                        Play
                    </Text>
                        </Pressable>
                        {/* download btn */}
                        <Pressable onPress={() => { console.warn('download') }} style={styles.downloadButton}>
                            <Text style={styles.downloadButtonText}>
                                <AntDesign name="download" size={16} color="white" />
                                {' '}
                        Download
                    </Text>
                        </Pressable>
                        <Text style={{ color: "white", marginVertical: 10 }}>{movie.plot}</Text>
                        <Text style={{ color: "grey" }}>Cast: {movie.cast}</Text>
                        <Text style={{ color: "grey" }}>Creater: {movie.creator}</Text>

                        {/* row with buttons */}
                        <View style={{ flexDirection: "row", marginTop: 20 }}>
                            <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                                <AntDesign name="plus" size={24} color="white" />
                                <Text style={{ color: "darkgrey", marginTop: 5 }}>My List</Text>
                            </View>
                            <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                                <Entypo name="thumbs-up" size={24} color="white" />
                                <Text style={{ color: "darkgrey", marginTop: 5 }}>Rate</Text>
                            </View>
                            <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                                <Entypo name="share" size={24} color="white" />
                                <Text style={{ color: "darkgrey", marginTop: 5 }}>Share</Text>
                            </View>

                        </View>
                        {/* picker to select season */}
                        <Picker
                        // to access state
                        style={{color: "white"}}
                            selectedValue={currentSeason.name} //here value is season1
                            onValueChange={(itemValue, itemIndex) =>{
                                setCurrentSeason(movie.seasons.items[itemIndex])
                            }}>
                                {seasonNames.map(seasonName =>(
                                    <Picker.Item label={seasonName} value={seasonName} key={seasonName} />
                                ))}
                            
                        </Picker>

                    </View>
                )}

                renderItem={({ item }) => (
                    <EpisodeItem episode={item} />
                )}
            />

        </View>
    )
}

export default MovieDetailsScreen
