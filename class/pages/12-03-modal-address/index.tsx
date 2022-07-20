import { Modal, Button } from "antd";
import { useState } from "react";
import { DaumPostcodeEmbed } from "react-daum-postcode";

export default function ModalAlertPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onCompletePostcode = (data: any) => {
    console.log(data);
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        모달창 열기
      </Button>
      {/* 1. 모달 종료 방식 - 모달 숨기기(자소서같은 내용은 임시저장하기 위해 사용) */}
      <Modal
        title="모달 제목"
        visible={isModalVisible} // 끄는게 아니라 숨기는 것.
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcodeEmbed onComplete={onCompletePostcode} />
      </Modal>

      {/* 2. 모달 종료 방식 - 모달 삭제(개인정보같은 내용은 바로 삭제) */}
      {isModalVisible && (
        <Modal
          title="모달 제목"
          visible={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcodeEmbed onComplete={onCompletePostcode} />
        </Modal>
      )}
    </>
  );
}
