import React from 'react'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard, TransactionCardProps} from '../../components/TransactionCard'

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
    Title,
    TransactionList,
    LogoutButton
} 

from './styles'

const data : DataListProps[] = [
    {
        id: '1',
        type: 'positive',
        title: 'Desenvolvimento de site',
        amount: 'R$ 12.000,00',
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
        },
        date: '13/04/2020'
    },

    {
        id: '2',
        type: 'negative',
        title: 'Hamburgueria Pizzy',
        amount: 'R$ 59,00',
        category: {
            name: 'Alimentação',
            icon: 'coffee'
        },
        date: '10/04/2020'
    },

    {   
        id: '3',
        type: 'negative',
        title: 'Aluguel do apartamento',
        amount: 'R$ 1.200,00',
        category: {
            name: 'casa',
            icon: 'home'
        },
        date: '10/04/2020'
    }
]

export interface DataListProps extends TransactionCardProps{
    id: string
}

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
                    <LogoutButton onPress={() => {}}>
                        <Icon name='power'/>
                    </LogoutButton>
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
                <Title>Listagem</Title>      

                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <TransactionCard data={item}/>}
                   
                />
               
                

            </Transactions>

        </Container>
    )
}