import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ResultCalculation(props) {
  const {capital, interest, mes, total, errorMensage} = props;
  return (
    <View style={styles.content}>
      {total && (
        <View style={styles.boxResult}>
          <Text style={styles.title}> RESUMEN </Text>
          <DataResult title="Cantidad solicitada:" value={`${capital} €`} />
          <DataResult title="Interes %:" value={`${interest} %`} />
          <DataResult title="Plazos:" value={`${mes} meses`} />
          <DataResult title="Pago mensual:" value={`${total.monthlyFee} €`} />
          <DataResult
            title="Total a pagar:"
            value={`${total.totalPayable} €`}
          />
        </View>
      )}
      <View>
        <Text style={styles.error}> {errorMensage} </Text>
      </View>
    </View>
  );
}

function DataResult(props) {
  const {title, value} = props;

  return (
    <View style={styles.value}>
      <Text> {title} </Text>
      <Text> {value} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 40,
    marginHorizontal: 40,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 20,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
