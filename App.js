import React ,{setState, useState}from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import WheelOfFortune from 'react-native-wheel-of-fortune'

export default function App() {
  const rewards = ["kokotturturko","hgfhgf",3,4,5,6,7,8,9,10]
  const [winner, setWinner] = useState("HUY");
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
    getWinner={(value, index) => setWinner(value)}
/>
  <Text>{winner}</Text>
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
