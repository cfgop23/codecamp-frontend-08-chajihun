import { UploadButton, UploadFileHidden, UploadImg } from "./UploadImg.styles";
import { IUploadImgUIProps } from "./UploadImg.types";

export default function UploadImgUI(props: IUploadImgUIProps) {
  return (
    <>
      {props.imgUrl ? (
        <UploadImg
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.imgUrl}`}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <>+</>
          <>업로드</>
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeImg}
      />
    </>
  );
}
