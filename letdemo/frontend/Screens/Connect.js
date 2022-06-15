import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const CONTENT = {
  tableHead: ['no','RECIEVED ', 'INVITATION', 'SENT'],
  tableTitle: ['1', ' 2', ' 3', '4'],
  tableData: [
    ['Connect people', 'Acccept ', 'pending'],
    ['Connect people', 'Acccept ', 'pending'],
    ['Connect people', 'Acccept ', 'pending'],
    ['Conect people', 'Acccept ', 'pending'],
  ],
};

export default function Connect({navigation}) {
  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={CONTENT.tableHead}
          flexArr={[1, 2, 1, 1]}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          <Col
            data={CONTENT.tableTitle}
            style={styles.title}
            heightArr={[28, 28]}
            textStyle={styles.text}
          />

         
          <Rows
            data={CONTENT.tableData}
            flexArr={[2, 1, 1]}
            style={styles.row}
            textStyle={styles.text}
          />
       
          
        </TableWrapper>
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  padding: 16, paddingTop: 100,     backgroundColor:"#E5E5E5",
  flex:1, },
  head: { height: 40, backgroundColor: '#0000ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#0000ff' },
  row: { height: 28 },
  text: { textAlign: 'center' },
});