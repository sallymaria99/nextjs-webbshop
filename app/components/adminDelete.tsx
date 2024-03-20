import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { useProducts } from "../contexts/ProductContext";
import { useState } from "react";

interface DeleteProps {
  id: string;
}

export default function AdminDelete(props: DeleteProps) {
  const { removeProduct } = useProducts();
  const [openConfirmation, setOpenConfirmation] = useState(false);

  const handleDeleteConfirmation = () => {
    setOpenConfirmation(true);
  };

  const handleDelete = () => {
    removeProduct(props.id);
    setOpenConfirmation(false);
  };

  const handleCancelDelete = () => {
    setOpenConfirmation(false);
  };

  return (
    <Box component="div">
      <IconButton
        onClick={handleDeleteConfirmation}
        data-cy="admin-remove-product"
      >
        <DeleteIcon />
      </IconButton>

      <Dialog
        open={openConfirmation}
        onClose={handleCancelDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        data-cy="confirm-delete-button"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Products?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
