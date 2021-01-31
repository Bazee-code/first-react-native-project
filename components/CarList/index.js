import React from 'react';
import {View,Text,FlatList,Dimensions} from 'react-native';

// local
import styles from './styles'; 
import Car from '../CarItem'
import cars from '../../cars';

const CarList = (props) => {
	return (
		<View style={styles.container}>
			<FlatList 
				data = {cars}
				renderItem={({item})=> <Car eachcar={item} />}
				snapToALignment={'start'}
				decelerationRate={'fast'}
				snapToInterval={Dimensions.get('window').height}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}

export default CarList;