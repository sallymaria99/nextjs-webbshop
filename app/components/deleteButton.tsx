import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton } from "@mui/material";
import { useCart } from "../contexts/CartContext";

interface DeleteProps {
  id: string;
}

export default function DeleteButton(props: DeleteProps) {
  const { clearProducts: clearCart } = useCart();
  function handleDelete() {
    clearCart(props.id);
  }
  return (
    <Box component="div">
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
}
