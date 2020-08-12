import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen09847Navigator from '../features/BlankScreen09847/navigator';
import CopyOfBlankScreen09846Navigator from '../features/CopyOfBlankScreen09846/navigator';
import BlankScreen39845Navigator from '../features/BlankScreen39845/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen09847: { screen: BlankScreen09847Navigator },
CopyOfBlankScreen09846: { screen: CopyOfBlankScreen09846Navigator },
BlankScreen39845: { screen: BlankScreen39845Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
