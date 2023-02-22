test("test_full_api_link", () => {
  const key = "bv1uf4v48v6o5ed6h88g";
  const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";
  const KEY_URL = '&token=${key}';
  const final_api = BASE_URL + KEY_URL;

  expect(
    final_api ==
      "https://finnhub.io/api/v1/search?&token=bv1uf4v48v6o5ed6h88g"
  );
});

test("api_return_call_aapl_stock", () => {
    const key = "bv1uf4v48v6o5ed6h88g";
    const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";
    const KEY_URL = '&token=${key}';
    stock = 'AAPL'
    const final_api = BASE_URL + stock + KEY_URL;
  
    expect(
      final_api ==
        "https://finnhub.io/api/v1/search?q=apple&token=bv1uf4v48v6o5ed6h88g"
    );
  });

  test("api_return_call_spy_stock", () => {
    const key = "bv1uf4v48v6o5ed6h88g";
    const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";
    const KEY_URL = '&token=${key}';
    stock = 'SPY'
    const final_api = BASE_URL + stock + KEY_URL;
  
    expect(
      final_api ==
        "https://finnhub.io/api/v1/search?q=apple&token=bv1uf4v48v6o5ed6h88g"
    );
  });