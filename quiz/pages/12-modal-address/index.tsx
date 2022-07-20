import styled from "@emotion/styled";
import { Button, Modal } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

const Address = styled.div`
  width: 500px;
`;

export default function ModalAddressPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onCompletePostcode = (data: any) => {
    console.log(data);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div>2-1</div>
      <Address>
        <DaumPostcode onComplete={onCompletePostcode} autoClose />
      </Address>

      <div>2-2</div>
      <Button onClick={showModal}>모달 열기</Button>
      <Modal
        title="게시글 등록"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>게시글이 등록되었습니다.</div>
      </Modal>
    </>
  );
}
