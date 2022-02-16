import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Pages
import Home from "./src/pages/Home";
import Persons from "./src/pages/Persons";
import Options from "./src/pages/Options";
import Meats from "./src/pages/Meats";
import Drinks from "./src/pages/Drinks";
import Vegetarians from "./src/pages/Vegetarians";
import Accomp from "./src/pages/Accomp";
import Others from "./src/pages/Others";
import Utilities from "./src/pages/Utilities";
import Result from "./src/pages/Result";

const AppStack = createStackNavigator();

const Routes = () => {
	return (
		<NavigationContainer>
			<AppStack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<AppStack.Screen name="Home" component={Home} />
				<AppStack.Screen name="Persons" component={Persons} />
				<AppStack.Screen name="Options" component={Options} />
				<AppStack.Screen name="Meats" component={Meats} />
				<AppStack.Screen name="Drinks" component={Drinks} />
				<AppStack.Screen name="Vegetarians" component={Vegetarians} />
				<AppStack.Screen name="Accomp" component={Accomp} />
				<AppStack.Screen name="Others" component={Others} />
				<AppStack.Screen name="Utilities" component={Utilities} />
				<AppStack.Screen name="Result" component={Result} />
			</AppStack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
