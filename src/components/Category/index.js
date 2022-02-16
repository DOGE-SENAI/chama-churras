import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Category = ({ text, image, textBelow, onClick }) => {
	return (
		<TouchableOpacity onPress={onClick}>
			<View style={textBelow ? styles.textBelow : styles.textAside}>
				<Image
					source={image}
					style={textBelow ? styles.image : [styles.image, styles.imageSpacing]}
				/>

				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

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
	imageSpacing: {
		marginRight: 25,
	},
	text: {
		fontSize: 30,
		fontWeight: "400",
	},
});

export default Category;
