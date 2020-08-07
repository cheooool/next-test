import Head from "next/head";
import { useState, useCallback, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import { listPush, listPop, requestList } from "../redux/list/list.actions";

import Button from "../components/Button";

function Home({ list }) {
  const { data } = list;
  console.log(data);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestList());
  }, []);

  const handlePush = useCallback(() => {
    dispatch(
      listPush({
        title: count,
      })
    );
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <Head>
        <title>Test</title>
      </Head>
      <h1>테슽</h1>
      {data && (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      )}

      <Button type="button" onClick={handlePush}>
        추가
      </Button>
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
