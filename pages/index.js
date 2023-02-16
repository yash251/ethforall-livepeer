import {Button, Asset} from '../components';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-500 mb-4'>NFT Connect</h1>
      <Button>
        Click to upload
      </Button>
      <input type={'file'} accept='video/*' className='hidden' /> 
      <Asset />
    </div>
  )
}