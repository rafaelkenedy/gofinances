import React from 'react'

import { 
    Container, 
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    Icon

} 
from './styles'

export function Dashboard(){
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo 
                            source={ {uri: 'https://drive.google.com/uc?export=view&id=1PK40k8HgVg0uzh7B9C_oZWJr6J4bf0_K'}}/>
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Rafael</UserName>
                        </User>
                    </UserInfo>
                    <Icon name='power'/>
                </UserWrapper>

                
            </Header>            
        </Container>
    )
}