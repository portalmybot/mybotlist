import React from 'react';
const marked = require("marked");

const outputStyle = {
  backgroundColor: "#252525",
  border: '1px solid #33343b',
  padding: "10px 20px",
};

export default function DescriptionBot({ bot }) {
 
  const { longDesc_bot, shortDesc_bot, tag_bot, prefix_bot } = bot;
  const desContent = longDesc_bot ? longDesc_bot : `# Bot ${tag_bot}
  ${shortDesc_bot}, prefix: ${prefix_bot}`;

  return (
     <div style={outputStyle}
        dangerouslySetInnerHTML={{
          __html: marked(desContent),
        }}
      >
    </div>
  );
}
