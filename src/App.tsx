import { useCardData } from "./hooks/useCardData";
import { AnimatePresence } from "framer-motion";
import { Card } from "./components/Card";
import { Loader } from "./components/Loader";
import { AddProductButton } from "./components/AddProductButton";

function App() {
  const [{ products, isProductLoading }, { handleAdd, handleRemove }] =
    useCardData();

  return isProductLoading ? (
    <Loader />
  ) : (
    <div className="py-12 space-y-5 max-w-[1280px] flex flex-col items-center	m-auto">
      <AddProductButton onAdd={handleAdd} />
      <div className="relative py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto w-10/12">
        <AnimatePresence>
          {products.map((product) => (
            <Card key={product.id} onDelete={handleRemove} {...product} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
