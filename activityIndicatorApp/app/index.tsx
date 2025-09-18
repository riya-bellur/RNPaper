import MyButton from "@/components/Button";
import Indicator from "@/components/Indicator";
import { StyleSheet, Text, View } from "react-native";
export default function Index() {
  return (  
    <View> 
      <MyButton/>
      <Text>Small Size</Text>
        <Indicator animating = {true} color = {"blue"} size = {'small'}/>
      <Text>Large Size</Text>
        <Indicator animating = {true} color = {"green"} size = {'large'}/>
    </View>
  );
}
const styles = StyleSheet.create({ 
  text: { 
    fontSize: 24, 
    paddingTop: 50, 
  },
}) 
