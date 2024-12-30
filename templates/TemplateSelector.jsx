import React, { useState } from 'react';

const TemplateSelector = () => {
  const templates = ['Coffee Shop', 'Restaurant', 'Foodly'];
  const [selectedTemplate, setSelectedTemplate] = useState('');

  const selectRandomTemplate = () => {
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    setSelectedTemplate(randomTemplate);
  };

  return (
    <div>
      <h2>Template Selector</h2>
      <button onClick={selectRandomTemplate}>Select Random Template</button>
      {selectedTemplate && <p>You selected: {selectedTemplate}</p>}
    </div>
  );
};

export default TemplateSelector;
