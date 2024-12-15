import Editor from '../components/Editor/Editor';
import { Row, Col } from 'antd';

export default function Home() {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        padding: '16px',
      }}
    >
      <Col
        span={20}
        style={{
          backgroundColor: 'white',
          minHeight: '80vh',
          padding: '32px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          overflowY: 'auto',
        }}
      >
        <Editor />
      </Col>
    </Row>
  );
}
