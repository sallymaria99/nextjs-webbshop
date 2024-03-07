import { products } from "../data/index";
import Image from "next/image";
function Home() {
  return (
    <main>
      <h1>Home</h1>
      <p>Det här är startsidan. Här ska alla produkterna visas.</p>
      {products.map((product) => (
        <div key={product.id}>
          <Image
            src={product.image}
            width={200}
            height={200}
            alt={product.title}
          />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </main>
  );
}
export default Home;
