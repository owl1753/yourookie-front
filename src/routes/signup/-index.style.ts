import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 56px 50px;
  max-width: 1360px;
  margin: 0 auto;
`;

export const StyledFormContainer = styled.form`
  padding: 28px 34px;
  width: 100%;
  margin-top: 16px;
  border-radius: 8px;
  border: 1px solid #000;
  background: #fff;
`;

export const StyledTitle = styled.h2`
  color: #000;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  margin-left: 12px;
`;

export const StyledSection = styled.div`
  margin-bottom: 2rem;
`;

export const StyledInput = styled.input`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid #858585;
  background: #f9f9f9;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
`;

export const StyledSectionTitle = styled.h3`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 38px;
  display: flex;
  align-items: flex-end;
  gap: 11px;
`;

export const StyledFieldWrapper = styled.div`
  margin-bottom: 42px;
`;

export const StyledFieldLabel = styled.div`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 16px;
`;

export const StyledFieldDescription = styled.div`
  color: #858585;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin-top: 8px;
`;

export const StyledFieldSuccessMessage = styled.div`
  color: #1781ee;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin-top: 8px;
`;

export const StyledFieldErrorMessage = styled.div`
  color: #eb0000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin-top: 8px;
`;

export const StyledSectionDescription = styled.div`
  color: #2e2e2e;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledEmailCheckButton = styled.button`
  display: flex;
  width: 190px;
  height: 50px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: #e2ecf7;
  border: none;

  color: #1781ee;

  font-size: 20px;
  font-style: normal;
  font-weight: 500;

  cursor: pointer;
`;

export const StyledSubmitButton = styled.button`
  display: flex;
  width: 190px;
  height: 50px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: #1781ee;
  border: none;

  color: #fff;

  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;

  cursor: pointer;

  margin: 0 auto;
`;

export const StyledUploadBackground = styled.label`
  display: flex;
  width: 561px;
  height: 420px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;

  border-radius: 5px;
  border: 1px solid #858585;
  cursor: pointer;

  background-color: #f9f9f9;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  position: relative;
`;

export const StyledUploadDescription = styled.div`
  color: #858585;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
`;

export const StyledEditImage = styled.span`
  display: flex;
  width: 55px;
  padding: 10px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: #e2ecf7;
  position: absolute;
  top: 17px;
  right: 15px;
`;

export const StyledErrorMessage = styled.div`
  color: #eb0000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  margin-bottom: 40px;
`;
