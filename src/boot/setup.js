import React, { Component } from "react";
import { StyleProvider } from "native-base";

import App from "../App";

/*theme provided by the native base*/
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor'


export default class Setup extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <App />
      </StyleProvider>
    );
  }
}
