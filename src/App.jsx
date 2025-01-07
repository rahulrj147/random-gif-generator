import Tag from "./components/Tag";
import Random from "./components/Random";

export default function App() {
  return (
    <div className="w-screen  flex  flex-col   rounded-sm background box-border overflow-hidden " >
      <h1 className="bg-gray-50  text-center text-4xl w-auto  box-border  m-10" >Random Gif</h1>
      <div className="flex flex-col items-center w-screen " >
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}
