import React from 'react';
import CodeBlock from '@theme/CodeBlock';

interface Props {
  code: string;
  language?: string;
  inline?: boolean;
}

const CodeSnippet: React.FC<Props> = ({ code, language = 'javascript', inline = false }) => {
  if (inline) {
    return <code style={{ backgroundColor: '#f5f5f5', padding: '2px 4px', borderRadius: '4px' }}>{code}</code>;
  }
  
  return <CodeBlock language={language}>{code}</CodeBlock>;

};


export default CodeSnippet;
