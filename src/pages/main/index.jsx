import React from 'react';
import { Layout } from 'antd'

const { Header, Content, Sider } = Layout

const Index = () => (
  <div>
    <Layout>
      <Header className="header">
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}>
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
);
export default Index;
// export default () => (
//   <PageHeaderWrapper content=" 这个页面只有 admin 权限才能查看">
//     <Card>
//       <Alert
//         message="umi ui 现已发布，欢迎使用 npm run ui 启动体验。"
//         type="success"
//         showIcon
//         banner
//         style={{
//           margin: -12,
//           marginBottom: 48,
//         }}
//       />
//       <Typography.Title
//         level={2}
//         style={{
//           textAlign: 'center',
//         }}
//       >
//         <Icon type="smile" theme="twoTone" /> Ant Design Pro{' '}
//         <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /> You
//       </Typography.Title>
//     </Card>
//     <p
//       style={{
//         textAlign: 'center',
//         marginTop: 24,
//       }}
//     >
//       Want to add more pages? Please refer to{' '}
//       <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
//         use block
//       </a>
//       。
//     </p>
//   </PageHeaderWrapper>
// );
