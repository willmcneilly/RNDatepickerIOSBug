import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DatePickerIOS
} from 'react-native';

class DatePickerBug extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  onDateChange(date) {
    this.setState({
      date: date
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.date.toString()}</Text>
        <DatePickerIOS
          date={this.state.date}
          mode="date"
          onDateChange={(date) => this.onDateChange(date)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('DatePickerBug', () => DatePickerBug);
