import hljs from 'highlight.js/lib/core';
// 导入需要的语言高亮
import ts from 'highlight.js/lib/languages/typescript'
import vue from 'highlight.js/lib/languages/typescript'
// import csharp from 'highlight.js/lib/languages/csharp';
import bash from 'highlight.js/lib/languages/bash';

// hljs.registerLanguage('vue', ht)
hljs.registerLanguage('ts', ts);
hljs.registerLanguage('typescript', ts);
hljs.registerLanguage('vue', vue);

// hljs.registerLanguage('csharp', csharp);
// hljs.registerLanguage('php', php);
// hljs.registerLanguage('python', python);
// hljs.registerLanguage('objectivec', objectivec);
hljs.registerLanguage('bash', bash);

export default hljs;
