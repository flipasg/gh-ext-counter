import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import useQueryParameters from '../hooks/useQueryParameters';

export default function ExtensionCounter() {
  const {owner, repository} = useQueryParameters()

  return (
    <div className='App'>
      Owner: {owner} <br/>
      Repository: {repository}
    </div>
  );
}
