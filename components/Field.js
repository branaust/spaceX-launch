import React from "react";
import styled from "styled-components/native";

const Field = ({ label, value, showDivider = true }) => {
  return (
    <Container>
      <FieldWrapper>
        <Label>{label}</Label>
        <Value>{value}</Value>
      </FieldWrapper>
      {showDivider && <DividingLine />}
    </Container>
  );
};

const DividingLine = styled.View`
  width: 100%;
  height: 1px;
  border-top-width: 1px;
  border-top-color: white;
  margin-vertical: 10px;
`;

const Container = styled.View``;

const FieldWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 5px;
`;

const Label = styled.Text`
  color: white;
`;

const Value = styled.Text`
  color: white;
`;

export default Field;
