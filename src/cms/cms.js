import CMS from 'netlify-cms';

import IndexPagePreview from './preview-templates/IndexPagePreview';
import ProductPreview from './preview-templates/ProductPreview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('products', ProductPreview);
