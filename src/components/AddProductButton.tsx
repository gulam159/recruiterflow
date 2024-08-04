import { FiPlusCircle } from "react-icons/fi";

export const AddProductButton = ({ onAdd }: { onAdd: () => void }) => (
  <div className="mx-auto text-center">
    <button
      className="py-1.5 px-3.5 border-[1.5px] border-primary rounded-lg"
      onClick={onAdd}
    >
      <FiPlusCircle size={18} className="inline-block mb-0.5 mr-1.5" />
      ADD PRODUCT
    </button>
  </div>
);
