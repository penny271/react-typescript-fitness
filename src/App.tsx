// 読み込むファイルが index.tsx の場合は、 /index.tsxと書く必要なし
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import OurClasses from "@/scenes/ourClasses";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
SelectedPage

// tsrafce

function App() {
  // const [selectedPage, setSelectedPage] = useState<string>("home")
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      console.log('window.scrollY :>> ', window.scrollY);
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        // 画面のtopにいる場合やtopに戻った場合に常にHomeを赤色にしたいため
        setSelectedPage(SelectedPage.Home);
      }
      // 読みやすさを重視し、elseを使っていない
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    // This is essential for preventing memory leaks, avoiding unnecessary callbacks, ensuring correct behavior in conditional rendering, and complying with React's component lifecycle best practices.
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <div className='app bg-gray-20'>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}


export default App


