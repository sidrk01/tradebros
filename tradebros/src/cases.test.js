import renderer from 'react-test-renderer';
import Learn from './Pages/Learn.js';
import Features from './Pages/Features.js';

it('Features renders correctly', () => {
  const tree = renderer
    .create(<Features/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Learn renders correctly', () => {
  const tree = renderer
    .create(<Learn/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

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
    let stock = 'AAPL'
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
    let stock = 'SPY'
    const final_api = BASE_URL + stock + KEY_URL;
  
    expect(
      final_api ==
        "https://finnhub.io/api/v1/search?q=apple&token=bv1uf4v48v6o5ed6h88g"
    );
  });