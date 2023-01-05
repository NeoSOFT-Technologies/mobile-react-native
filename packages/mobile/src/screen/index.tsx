import i18n from 'localisation';
import {SafeAreaView, Text} from 'react-native';
import ClassComponent from '../di/component';

const Screen = () => {
     const a = new ClassComponent('test')
     
    return (
    <SafeAreaView>
      <Text>HEllo World</Text>
      <Text>Hello {i18n.t('appName')}</Text>
    </SafeAreaView>
  );
};
export default Screen;
