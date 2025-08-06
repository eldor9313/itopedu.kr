import React from "react";
import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useHistory } from "react-router-dom";
import { CartItem } from "../../../lib/types/search";
import { Messages, serverApi } from "../../../lib/config";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { useGlobals } from "../../hooks/useGlobals";
import OrderService from "../../services/OrderService";

// BASKET LOGIC
interface BasketProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
}

export default function Basket(props: BasketProps) {
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = props;
  const { authMember, setOrderBuilder } = useGlobals();
  const history = useHistory();
  const itemsPrice = cartItems.reduce(
    (a: number, c: CartItem) => a + c.quantity * c.price,
    0
  );
  const shippingCost: number = itemsPrice < 100 ? 5 : 0;
  const totalPrice = (itemsPrice + shippingCost).toFixed(1);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  /** HANDLERS **/
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // proceedOrderHandler
  const proceedOrderHandler = async () => {
    try {
      handleClose();
      if (!authMember) throw new Error(Messages.error2);

      const order = new OrderService();
      await order.createOrder(cartItems);

      onDeleteAll();

      setOrderBuilder(new Date());
      history.push("/orders");
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <Box className="cart-container">
      <IconButton
        aria-label="cart"
        onClick={handleClick}
        className="cart-icon-button"
      >
        <Badge
          badgeContent={cartItems.length}
          color="error"
          className="cart-badge"
        >
          <ShoppingCartIcon className="shopping-cart-icon" />
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          className: "cart-menu-paper",
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Stack spacing={2} className="cart-stack">
          {cartItems.length === 0 ? (
            <Typography align="center" className="empty-cart-text">
              Your cart is empty.
            </Typography>
          ) : (
            <>
              <Stack className="cart-header">
                <Typography className="cart-title">Your Cart</Typography>
                <Tooltip title="Clear Cart">
                  <IconButton
                    onClick={onDeleteAll}
                    className="clear-cart-button"
                  >
                    <DeleteForeverIcon color="error" />
                  </IconButton>
                </Tooltip>
              </Stack>

              <Box className="cart-items-container">
                {cartItems.map((item) => (
                  <Box key={item._id} className="cart-item">
                    <Box display="flex" className="cart-item-left">
                      <CancelIcon
                        className="cancel-icon"
                        onClick={() => onDelete(item)}
                      />
                      <img
                        src={`${serverApi}/${item.image}`}
                        alt={item.name}
                        className="cart-item-image"
                      />
                      <Box>
                        <Typography variant="subtitle2" className="item-name">
                          {item.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className="item-price-qty"
                        >
                          ${item.price} × {item.quantity}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="cart-item-qty-buttons">
                      <Button
                        onClick={() => onRemove(item)}
                        className="qty-button"
                      >
                        -
                      </Button>
                      <Button
                        onClick={() => onAdd(item)}
                        className="qty-button"
                      >
                        +
                      </Button>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Box className="cart-footer">
                <Typography className="total-price-text">
                  Total: ${totalPrice} ({itemsPrice} + {shippingCost})
                </Typography>
                <Button
                  onClick={proceedOrderHandler}
                  className="checkout-button"
                >
                  Proceed to Checkout
                </Button>
              </Box>
            </>
          )}
        </Stack>
      </Menu>
    </Box>
  );
}
