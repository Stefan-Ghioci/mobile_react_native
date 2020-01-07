import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { styles, chartConfig } from './StatsModalStyles';
import { LineChart } from 'react-native-chart-kit';

const StatsScreenView = ({ chartData, onGoBack, onSendMail }) => {
  return (
    <View style={styles.container}>
      {chartData.datasets[0].data !== [] ? (
        <>
          <Text style={styles.title}>RATINGS AVERAGE PER YEAR</Text>
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
        </>
      ) : (
        <></>
      )}
    </View>
  );
};

export default StatsScreenView;
