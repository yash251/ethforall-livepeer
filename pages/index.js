import { useState, useRef } from 'react';
import {Button, Asset} from '../components';

export default function Home() {
  const ref = useRef(null);

  const [asset, setAsset] = useState(null);

  const chooseFile = () => { 
    ref.current.click();
  };

  const onChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setAsset(file);
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-500 mb-4'>NFT Connect</h1>
      <Button
        onClick={chooseFile}
      >
        {asset ? "Upload a file" : "Choose a file"}
      </Button>
      <input type={'file'} accept='video/*' className='hidden' ref={ref} onChange={onChange} /> 
      {asset && <Asset asset={asset} />}
    </div>
  )
}