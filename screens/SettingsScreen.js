import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import ConfigScreen from './ConfigScreen'

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <ConfigScreen />;
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
