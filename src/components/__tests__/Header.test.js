import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

import Header from "../Header";

test("should load the header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getAllByTestId("logo")
  expect(logo[0].src).toBe("http://localhost/dummyLogo.png")

});

test("Online status should be green on rendering header", () => {
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  
    const onlineStatus = header.getByTestId("online-status")
    expect(onlineStatus.innerHTML).toBe("🟢");
  
  });
  test("Cart should have 0 items on rendering header", () => {
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  
    const cart = header.getByTestId("cart")
    expect(cart.innerHTML).toBe("Cart- 0 items");
  
  });
