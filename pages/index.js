import Head from "next/head";
import { useState, useCallback } from "react";
import { connect, useDispatch } from "react-redux";

import { listPush, listPop } from "../redux/list/list.actions";

import Button from "../components/Button";

function Home({ list }) {
  const { data } = list;
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const handlePush = useCallback(() => {
    dispatch(listPush(count));
    setCount(count + 1);
  }, [count]);
  const handlePop = () => dispatch(listPop());

  return (
    <div>
      <Head>
        <title>Test</title>
      </Head>
      <h1>테슽</h1>
      {data && (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      <Button type="button" onClick={handlePush}>
        {count} 추가
      </Button>

      {data.length > 0 && (
        <Button type="button" onClick={handlePop}>
          {data[0]} 제거
        </Button>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { list } = state;
  return {
    list,
  };
};

export default connect(mapStateToProps)(Home);
