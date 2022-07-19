import { Modal, Button } from "antd";
import { useState } from "react";

export default function ModalAlertPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [password, setPassword] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        모달창 열기
      </Button>
      <Modal
        title="모달 제목"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        비밀번호 입력: <input type="password" onChange={onChangePassword} />
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
