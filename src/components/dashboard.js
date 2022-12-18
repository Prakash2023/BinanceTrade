import React from "react";
import { render } from "react-dom";
import moment from "moment";

import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

import {
  XYPlot,
  Hint,
  LineSeries,
  FlexibleXYPlot,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  AreaSeries
} from "react-vis";

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    times: [],
    high: [],
    low: [],
    chartData: [],
    query: "BTC",
    leaderboard: [],
    addressData: "",
    symbol: ""
  };

  componentDidMount() {
    this.loadChartData();
  }

  loadChartData = async () => {
    const response = await fetch(`https://s3.tradingview.com/tv.js`);
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  };
  render() {
    const { chartData, query, addressData, symbol } = this.state;

    return (
      <div>
        <div className="charty">
          {query.length > 2 ? (
            <TradingViewEmbed
              widgetType={widgetType.ADVANCED_CHART}
              widgetConfig={{
                interval: "1D",
                colorTheme: "dark",
                width: "100%",
                symbol: query + "USD"
              }}
            />
          ) : (
            "BTCUSD"
          )}
        </div>
      </div>
    );
  }
}

const Chart = (props) => {
  return (
    <div>
      <div className="chart">
        <p className="chart-data" key={props.time}>
          {"time" + props.time}
        </p>
        <p className="chart-data" key={props.active_addresses}>
          {"active addresses" + props.active_addresses}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
