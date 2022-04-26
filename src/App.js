//all these js should atart with >=0 import and >=1 export

import { Layout } from "antd";

const { Header, Content } = Layout;

function App() {
  //when you use <App/> react will know this is a component
  //or it is just a function
  return (
    <Layout style={{ height: "100vh" }}>
      <Header>header</Header>
      <Content
        style={{
          //vh: view height, only change when cliuent resize the view, not like px.
          //{}: don't translate inside. outside is jsx, inside is normal js
          //{{}} inside {} : an object outside {}: translation sign
          padding: "50px",//box model spacing
          maxHeight: "calc(100% - 64px)",//parent component's 100% - 64(header's height)
          overflowY: "auto",//generates rolling bar when height > max
        }}
      >
        content
      </Content>
    </Layout>
  );
}

export default App;