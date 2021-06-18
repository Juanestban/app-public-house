import React from 'react'
import {
	Image,
	ScrollView,
	TouchableOpacity,
	View as ViewDefault,
} from 'react-native'
import Text from '../../Atomos/Text'

export const Catetgorias = ({ data = [], isLoading, isError, onChangeId, width }) => {

	const handleChangeId = (id) => onChangeId(id)

	return (
		<ViewDefault style={{ width: '100%', height: 120 }}>
			<ScrollView
				style={{ width, height: 0 }}
				scrollEnabled
				horizontal
				showsHorizontalScrollIndicator={false}
			>
				{!isLoading &&
					!isError &&
					data.map(({ id = 0, nombre = '', icono = '' }) => (
						<TouchableOpacity key={id} style={{ padding: 5 }} onPress={() => handleChangeId(id)}>
							<Image
								source={{ uri: icono }}
								style={{
									width: 80,
									height: 80,
									resizeMode: 'cover',
									borderRadius: 500,
								}}
							/>
							<Text style={{ textAlign: 'center' }}>{nombre}</Text>
						</TouchableOpacity >
					))}
			</ScrollView>
		</ViewDefault>
	)
}