import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const Category = ({ text, image, textBelow}) => {
    return(
        <TouchableOpacity >
            <View style={textBelow ? styles.textBelow : styles.textAside}>
                <Image source={image} style={styles.image}/>

                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textBelow: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    textAside: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: 112,
        width: 112,
    },
    text: {
        fontSize: 30,
        fontWeight: '400',
    }
});

export default Category;