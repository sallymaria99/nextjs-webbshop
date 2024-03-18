import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton } from "@mui/material";
import { useProducts } from "../contexts/ProductContext";

interface DeleteProps {
  id: string;
}

export default function AdminDelete(props: DeleteProps) {
  const { removeProduct } = useProducts();
  function handleDelete() {
    removeProduct(props.id);
  }
  return (
    <Box component="div">
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
}
