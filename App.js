
import React from 'react';
import { View,Text, StyleSheet} from 'react-native';

export default const App extends React.Component{
  render{
    return(
      <View style={styles.container}>
        <Text> Hii Simrn!! </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})
