import { fireEvent, render, waitFor } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";
import RestaurantMenu from "../RestaurantMenu";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Update my cart",  () => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
          <RestaurantMenu/>
        </Provider>
      </StaticRouter>
    );
   // await waitFor(() => expect(body.getByTestId("menu")));
   // const menu = body.getByTestId("menu");
    const addBtn = body.getByTestId("add-btn")
    fireEvent.click(addBtn)
    const cart = body.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart- 1 items");  });