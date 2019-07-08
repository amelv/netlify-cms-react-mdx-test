
import CMS, { init } from 'netlify-cms-app';
import 'netlify-cms/dist/cms.css';
import Trend from 'react-trend';
import remarkEmojiPlugin from 'remark-emoji';

import { MdxControl, setupPreview } from 'netlify-cms-widget-mdx';

CMS.registerWidget(
  'mdx',
  MdxControl,
  setupPreview({
    components: {
      h1: ({ children, ...props }) => (
        <h1 style={{ color: 'tomato' }} {...props}>
          {children}
        </h1>
      ),
    },
    scope: {
      Layout: props => (
        <div
          style={{ padding: '10px', border: '1px solid green', borderRadius: '5px' }}
          {...props}
        />
      ),
    },
    allowedImports: {
      'react-trend': {
        ImportDefault: Trend,
      },
    },
    mdPlugins: [remarkEmojiPlugin],
  })
);

console.log("heeellpp")

init();
