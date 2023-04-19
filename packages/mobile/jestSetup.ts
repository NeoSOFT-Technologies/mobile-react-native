import React from "react";
import { useTheme } from "./src/theme/themeprovider";
jest.mock('react-native-linear-gradient', () => 'LinearGradient');
jest.mock('./src/theme/themeprovider',()=>({
    useTheme:()=>({state:'mocked_value'})
}))