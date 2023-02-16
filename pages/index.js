import {Button, Asset} from '../components';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-6xl font-bold'>NFT Connect</h1>
      <Button>
        Click to upload
      </Button>
      <Asset />
    </div>
  )
}
