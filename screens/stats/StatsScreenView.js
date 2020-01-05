import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { styles, chartConfig } from './StatsScreenStyles';
import { LineChart } from 'react-native-chart-kit';

const StatsScreenView = ({ chartData, onGoBack, onSendMail }) => {
  return (
    <>
    <View style={styles.title}>
      <Text h4>Ratings Average Per Year</Text>
    </View>
      <View style={styles.body}>
        <LineChart
          data={chartData}
          width={styles.chartWidth}
          height={styles.chartHeight}
          chartConfig={chartConfig}
          style={styles.chart}
          withDots={false}
          withInnerLines={false}
          bezier
        />
      </View>
      <View style={styles.footer}>
        <Button
          buttonStyle={styles.button}
          title='Go Back'
          type='outline'
          onPress={onGoBack}
        />
        <Button
          buttonStyle={styles.button}
          title='Send to email'
          onPress={onSendMail}
        />
      </View>
    </>
  );
};

export default StatsScreenView;
