import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardInfected = styled.View`
  background: #ffc107;
  background: #fff;
  align-items: center;
  width: 70px;
  height: 50px;
  border-radius: 4px;
  margin: 10px 15px;
  padding: 10px 15px;
`

export const CardRecovered = styled.View`
  background: #28a745;
  background: #fff;
  align-items: center;
  width: 70px;
  height: 50px;
  border-radius: 4px;
  margin: 10px 15px;
  padding: 10px 15px;
`

export const CardDeaths = styled.View`
  background: #dc3545;
  background: #fff;
  align-items: center;
  width: 70px;
  height: 50px;
  border-radius: 4px;
  margin: 10px 15px;
  padding: 10px 15px;
`

export const Number = styled.Text``;