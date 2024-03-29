import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = props => {
  const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues)

  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};

export default Chart;