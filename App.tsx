
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigationContainer from './src/navigations';

export default function App() {

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<RootNavigationContainer />
		</GestureHandlerRootView>
	)
}
