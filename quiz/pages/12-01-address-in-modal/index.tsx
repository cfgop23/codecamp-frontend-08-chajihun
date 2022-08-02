import styled from "@emotion/styled";
import { Button, Modal } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

const Address = styled.div`
  width: 300px;
  font-size: 20px;
`;

export default function ModalAddressPage() {
  const [address, setAddress] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onCompletePostcode = (data: any) => {
    console.log(data);
    setAddress(data.address);
    setIsModalVisible(false);
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
      <div>2-3</div>
      <Button onClick={showModal}>모달 열기</Button>
      {isModalVisible && (
        <Modal
          title="주소 검색"
          visible={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcode onComplete={onCompletePostcode} />
        </Modal>
      )}
      <Address>{address}</Address>
    </>
  );
}
