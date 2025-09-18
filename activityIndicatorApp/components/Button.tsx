import { useState } from "react";
import { Button, View } from "react-native";
import Indicator from "./Indicator";
const MyButton: React.FC = () => {
    const[isLoading, setIsLoading] = useState<boolean>(true); 
    return ( 
        <View> 
            <Button onPress={() => setIsLoading(!isLoading)} title = 'Press'> 
            </Button>
            <Indicator animating={isLoading} color={'red'} size={'large'}/> 
        </View>
        
    )
}; 


export default MyButton