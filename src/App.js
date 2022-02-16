
import { BrowserRouter as Router, Link, Switch, Route, useRouteMatch, useParams} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/product">Sản phẩm</Link>
          </li>
          <li>
            <Link to="/account_update">Cập nhật tài khoản</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/account_update">
          <AccountUpdate />
        </Route>
        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Đây là trang chủ cửa hàng phụ kiện thú cưng!</h2>;
}

function Login() {
  return <h2>Chức năng Login</h2>;
}

function SignUp() {
  return <h2>Chức năng Register</h2>;
}

function Admin() {
  let { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <div>
          <h2>Chức năng Admin</h2>
          <ul>
          <li>
            <Link to={`${path}/product_add`}>Thêm sản phẩm</Link>
          </li>
          <li>
            <Link to={`${path}/product_delete`}>Xoá sản phẩm</Link>
          </li>
          <li>
            <Link to={`${path}/product_stop_order`}>Tạm dừng sản phẩm</Link>
          </li>
          <li>
            <Link to={`${path}/statistic`}>Thống kê</Link>
          </li>
        </ul>
        </div>
      </Route>
      <Route path={`${url}/product_add`}>
        <h3>Thêm sản phẩm</h3>
      </Route>
      <Route path={`${url}/product_delete`}>
        <h3>Xoá sản phẩm</h3>
      </Route>
      <Route path={`${url}/product_stop_order`}>
        <h3>Tạm dừng sản phẩm</h3>
      </Route>
      <Route path={`${url}/statistic`}>
        <h3>Thống kê đơn hàng</h3>
      </Route>
    </Switch>
  )
}

function Product() {
  let {path} = useRouteMatch();
  return(
    <Switch>
      <Route exact path={path}>
        <h3>Các sản phẩm</h3>
        <ul>
          <li>
          <Link to={`${path}/1`}>Sản phẩm 1</Link>
          </li>
          <li>
          <Link to={`${path}/2`}>Sản phẩm 2</Link>
          </li>
          <li>
          <Link to={`${path}/3`}>Sản phẩm 3</Link>
          </li>
        </ul>
      </Route>
      <Route path={`${path}/:Id`}>
        <ProductID />
      </Route>
  </Switch>
  )
}

function ProductID() {
  let { Id } = useParams();
  return(
    <h3>Thông tin sản phẩm có ID = {Id}</h3>
  )
}

function AccountUpdate() {
  return(
    <h3>Cập nhật thông tin tài khoản</h3>
  )
}

export default App;
