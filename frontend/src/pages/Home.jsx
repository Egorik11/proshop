import { Col, Row, Spinner } from 'react-bootstrap';
import Product from '../components/Product/Product';
import { useGetProductsQuery } from '../slices/productsApiSlice';

const Home = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Spinner animation='border' role='status'></Spinner>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm='12' md='6' lg='4' xl='3'>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default Home;
