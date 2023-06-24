import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Statement from '../../components/Statement';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto de luz',
    value: '137,00',
    date: '03/06/2023',
    type: 0 //expenses
  },
  {
    id: 2,
    label: 'Boleto de Água',
    value: '93,37',
    date: '05/06/2023',
    type: 0 //expenses
  },
  {
    id: 3,
    label: 'SKY',
    value: '118,00',
    date: '07/06/2023',
    type: 0 //expenses
  },
  {
    id: 4,
    label: 'Salário',
    value: '9.860,00',
    date: '01/06/2023',
    type: 1 // revenue
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      
      <Header name='Ronni Oliveira'/>
      
      <Balance balance='51.000,00' expenses='-11.000,00'/>


      <Actions/>

      <Text style={styles.movimentationTitle}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Statement data={item}/>}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dedce3',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  movimentationTitle:{
    fontSize: 21,
    fontWeight: 'bold',
    marginStart: 13,
    marginEnd: 13,
    marginTop: 13,
    marginBottom: 13
  },
  list:{
    marginStart: 13,
    marginEnd: 13,
  }
});
