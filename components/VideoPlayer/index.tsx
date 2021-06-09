import { Audio, Video } from 'expo-av';
import { Playback } from 'expo-av/build/AV';
import React, { useEffect, useRef } from 'react'
import { View, Text } from 'react-native'
import { Episode } from '../../types'
import styles from './styles'

interface VideoPlayerProps{
    // we can global this prop type by placing in types.tsx
    // episode:{
    //     id: string,
    //     title: string,
    //     poster:string,
    //     duration:string,
    //     plot:string,
    //     video:string,
    // }
    episode: Episode
}

const VideoPlayer = (props: VideoPlayerProps) => {
    const {episode} = props

    const [status, setStatus] = React.useState({});

    const video = useRef<Playback>(null)

    useEffect(()=>{ 
        if(!video){
            return;
        }
        (async () =>{
            await video?.current?.unloadAsync();
            await video?.current?.loadAsync(
                {uri:episode.video},
                {},
                false
            )
        })();
    },[episode])

    // const handleVideoRef = (component: Playback) => {
    //     const playbackObject = component;

    //     const source = {
    //         uri:episode.video
    //     }
    //     const initialStatus = {

    //     }
    //     playbackObject.loadAsync(
    //         // here flase is for initial download
    //         source,initialStatus,false
    //     )
    //   }
    return (
        <View>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri: episode.video,
        }}
        posterSource={{uri:episode.poster}}
        posterStyle={{resizeMode:"cover",}}
        usePoster
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
        </View>
    )
}

export default VideoPlayer
