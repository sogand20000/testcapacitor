import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.testcapacitor',
  appName: 'testcapacitor',
  webDir: 'dist',
  backgroundColor: 'red',  /**
  * Background color of the Capacitor Web View.
  *
  * @since 1.1.0
  */
 android:{
backgroundColor:'green'
 }
};

export default config;
