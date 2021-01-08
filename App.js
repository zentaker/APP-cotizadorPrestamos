import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
} from 'react-native';
import Form from './src/components/Form'; //import default
import Footer from './src/components/Footer';
import ResultCalculation from './src/components/ResultCalculation';

import colors from './src/utils/colors';

export default function App() {
  const [capital, setCapital] = useState(null); //la variable, la funcion que actualiza el estado
  const [interest, setInterest] = useState(null);
  const [mes, setMes] = useState(null);
  //almacenar el valor total
  const [total, setTotal] = useState(null);
  const [errorMensage, setErrorMensage] = useState('');
  console.log(total);

  useEffect(() => {
    if (capital && interest && mes) {
      calculate();
    } else {
      reset();
    }
  }, [capital, interest, mes]);

  const calculate = () => {
    reset();
    if (!capital) {
      setErrorMensage('añade la cantidad que quieres solicitar');
    } else if (!interest) {
      setErrorMensage('añade el interes del prestamo ');
    } else if (!mes) {
      setErrorMensage('añade los meses a pagar');
    } else {
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -mes)) / i);

      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: (fee * mes).toFixed(2).replace('.', ','),
      });
    }
  };
  const reset = () => {
    setErrorMensage('');
    setTotal(null);
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador de Prestamos </Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMes={setMes}
        />
      </SafeAreaView>
      <ResultCalculation
        capital={capital}
        interest={interest}
        months={mes}
        total={total}
        errorMensage={errorMensage}
      />
      <Footer calculate={calculate} />
    </>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    height: 290,

    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
});
