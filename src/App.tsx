// 読み込むファイルが index.tsx の場合は、 /index.tsxと書く必要なし
import Navbar from "@/scenes/navbar";

function App() {

  return (
    <div className='app bg-gray-20'>
      <Navbar />
    </div>
  )
}


export default App


