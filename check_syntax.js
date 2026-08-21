import fs from 'fs';
import * as acorn from 'acorn';
import acornJsx from 'acorn-jsx';

const JsxParser = acorn.Parser.extend(acornJsx());

['src/App.jsx', 'src/components/ResultDashboard.jsx', 'src/utils/recommendationEngine.js'].forEach(file => {
  const code = fs.readFileSync(file, 'utf8');
  try {
    JsxParser.parse(code, { sourceType: 'module' });
    console.log(file + ' is OK');
  } catch (e) {
    console.error(file + ' error:', e);
  }
});
