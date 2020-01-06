import React from 'react';
import { View } from 'react-native';
import { Button, Text, Divider } from 'react-native-elements';
import { styles, chartConfig } from './StatsModalStyles';
import { LineChart } from 'react-native-chart-kit';

const StatsScreenView = ({ chartData, onGoBack, onSendMail }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>RATINGS AVERAGE PER YEAR</Text>
      </View>
      <View style={styles.body}>
        {chartData.datasets[0].data !== [] ? (
          <LineChart
            data={chartData}
            width={styles.chartWidth}
            height={styles.chartHeight}
            chartConfig={chartConfig}
            style={styles.chart}
            withDots={false}
            withInnerLines={false}
            formatXLabel={label => "'" + label.toString().substr(2, 4)}
            bezier
          />
        ) : (
          <></>
        )}
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
    </View>
  );
};

export default StatsScreenView;
