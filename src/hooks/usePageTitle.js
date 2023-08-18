import { useEffect } from 'react';

export function usePageTitle({pageTitle}) {

  useEffect(()=>{
    document.title=`${pageTitle} / Cinemate`;
  },[pageTitle])

  return null;
}
