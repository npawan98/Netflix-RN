import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        // backgroundColor:"white",
    },
    image:{
        width:100,
        height:170,
        resizeMode: 'cover', //cover -- to display full size
        borderRadius:5,
        margin: 5,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
    }
})
export default styles;