import React from 'react';
import Layout from './index';

import messages from '../data/messages/sr';
import 'intl/locale-data/jsonp/sr';

export default (props) => (
  <Layout
    {...props}
    i18nMessages={messages}
  />);