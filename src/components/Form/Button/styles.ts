import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
    width: 100%;
    background-color: ${({theme}) => theme.colors.secondary};
    border-radius: 5px;
    align-items: center;
    padding: 18px;

    
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.shape};
`;