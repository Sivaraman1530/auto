import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.auto',
  appName: 'auto',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
