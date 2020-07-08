import React ,{setState}from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import WheelOfFortune from 'react-native-wheel-of-fortune'

export default function App() {
  const rewards = ["1",2,3,4,5,6,7,8,9,10]
  return(<View style={styles.home}>
    <WheelOfFortune
    onRef={ref => (this.child = ref)} 
    rewards={ rewards }
    knobSize={30}
    borderWidth={3}
    borderColor={"black"}
    winner={3}
    innerRadius={50}
    backgroundColor={"white"}
    getWinner={(value, index) => this.setState({ winnerValue: value, winnerIndex: index })}
/>
<Button title="Press me" onPress={ () => { this.child._onPress() } } />
  </View>)
}

const styles = StyleSheet.create({
  home:{
    flex:1,
    backgroundColor:"yellow"
  },
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
