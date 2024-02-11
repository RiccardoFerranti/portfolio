import { useState } from 'react';

const useTabs = (tab: number) => {
  const [tabSelected, setTabSelected] = useState(tab);

  return { tabSelected, setTabSelected };
};

export default useTabs;
