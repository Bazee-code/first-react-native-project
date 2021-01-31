import React from 'react';
import { View,Text,Pressable} from 'react-native';

// local
import styles from './styles';

const StyledButton = (props) => {
	const {type,content,onPress} = props;
	
	/*console.warn(type);*/
	// make our styles dynamic
	const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6"; 
	const textColor = type === "primary" ? "#FFFFFF" : "#171A20";

	return (
		<React.Fragment >
			<Pressable 
			style={[styles.button,{backgroundColor:backgroundColor}]}
			onPress={onPress}
			>
			<Text style={[styles.buttonText,{color:textColor}]}>{content}</Text>
			</Pressable>
		</React.Fragment>
	)
};

export default StyledButton;