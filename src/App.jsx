import Random from './components/Random.js'
import Tag from './components/Tag.js'


export default function App() {
  return (

    <div className="w-full min-h-screen flex flex-col background relative items-center">

      <h1 className=" bg-blue-400 rounded-xl w-11/12 text-center mt-[40px] text-4xl px-10 py-2 font-bold border-4 border-black">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
      
    </div>

  );
}
