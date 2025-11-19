import Header from "@/components/header";
import HeroSection from "@/components/sections/hero";
import TrendSection from "./components/sections/trend";

const App = () => (
  <div className="font-inter flex flex-col items-center bg-[#1A2217] text-white">
    <div className="bg-hero w-screen">
      <Header />
      <main className="container">
        <HeroSection />
        <TrendSection />
      </main>
    </div>
    <main className="container">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque eum facilis, corrupti voluptatibus, rerum illo quibusdam id reiciendis autem exercitationem laboriosam, laborum praesentium recusandae magni esse quasi soluta nam natus. Dolor assumenda tenetur inventore eos ipsam beatae velit blanditiis, minus distinctio atque illum dolores odio sint quidem fuga obcaecati accusantium earum impedit cum! Saepe eum natus voluptas, dolore ex ipsum earum eaque architecto! Sint deserunt, aliquid quidem rem sunt doloremque, eum omnis a veniam aliquam architecto delectus necessitatibus excepturi. Nemo nam nobis inventore aut corporis alias vitae. Hic accusamus, debitis, vero vitae ea et fugiat ab aut non, molestiae deleniti!

    </main>
  </div>
);
export default App;
