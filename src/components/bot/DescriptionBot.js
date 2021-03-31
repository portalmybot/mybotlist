import React from 'react';
const marked = require("marked");

const outputStyle = {
  backgroundColor: "#252525",
  border: '1px solid #33343b',
  padding: "10px 20px",
};

export default function DescriptionBot() {
 
  const desContent = `# Bot MyBOT 
  Bot útil para todos, prefix: -`;

  return (
     <div style={outputStyle}
        dangerouslySetInnerHTML={{
          __html: marked(desContent),
        }}
      >
    </div>
  );
}
