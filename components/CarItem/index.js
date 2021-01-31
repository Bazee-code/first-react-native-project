import React from 'react';
import {View,Text,ImageBackground,StatusBar} from 'react-native';

// local
import styles from './styles';
import StyledButton from '../StyledButton';

const Car = (props) => {

	const {name,tagline,taglineCTA,image} = props.eachcar;

	return (
		<React.Fragment>
      <View style={styles.carContainer}>
        <ImageBackground 
        	source={image} 
        	style={styles.image}
        	/>

        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>{tagline}{' '}
          	<Text style={styles.taglineCta}>{taglineCTA}</Text>
          </Text>
        </View>

        <View style={styles.buttonContainer}>
	        <StyledButton 
	        type ="primary"
	        content ="Order Now"
	        onPress ={()=>console.warn("Custom order pressed")}
	        />
	        <StyledButton 
	        type ="secondary"
	        content ="Existing inventory"
	        onPress ={()=>console.warn("Existing inventory pressed")}
	        />
	       </View>
	       <StatusBar style="auto" />
      </View>
     </React.Fragment>
	)
}

export default Car;