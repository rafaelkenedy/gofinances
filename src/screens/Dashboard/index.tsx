import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard } from '../../components/TransactionCard'
//import { Title } from '../../components/HighlightCard/styles'

import { 
    Container, 
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    Icon,
    HighlightCards,
    Transactions,
    Title

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

            <HighlightCards>
                <HighlightCard 
                    type='up'
                    title='Entradas' 
                    amount='R$ 17.400,00' 
                    lastTransaction='Última entrada dia 13 de abril'
                />

                <HighlightCard
                    type='down' 
                    title='Saídas' 
                    amount='R$ 1.259,00' 
                    lastTransaction='Última entrada dia 03 de abril'
                />
                <HighlightCard
                    type='total' 
                    title='Total' 
                    amount='R$ 16.141,00' 
                    lastTransaction='1 à 16 de abril'
                />
                
            </HighlightCards>

            <Transactions>
                <Title>
                    Listagem
                </Title>      
                <TransactionCard/>

            </Transactions>

        </Container>
    )
}