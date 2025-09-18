import * as React from 'react';
import { ActivityIndicator } from 'react-native';

type propsType = { 
    animating: boolean; 
    color: string; 
    size: 'small' | 'large' ; 
};

const Indicator: React.FC<propsType> = ({ 
    animating, 
    color, 
    size,
}) => { 
    return ( 
        <ActivityIndicator animating={animating} color={color} size = {size}/> 
    )
}

export default Indicator;