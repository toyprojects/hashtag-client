import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SignInForm = styled.div`
  padding-top: 150px;
`

const Header = styled.div`
  width: 100%;
  padding-left: 40px;
  float: left;
  text-align: left;
  line-height: 5px;
`

const Form = styled.div`
  padding-top: 50%;
`

const FormInput = styled.input`
  border: none;
  border-bottom: 2px solid black;
  width: 100%;
  font-size: 24px;
  color: black;
  font-weight: 200;
`

const FormAlign = styled.div`
  padding-left: 25%;
`

const FormInputGroup = styled.div`
  padding-bottom: 25px;
`

const FormInformation = styled.div`
  width: 100%;
  text-align: left;
  color: rgb(153, 153, 153);
  font-size: 12.1px;
  padding-bottom: 25px;
  font-weight: 500;
`

const InformationLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.color || 'rgb(153, 153, 153)'};

  &:hover {
    color: ${props => props.color || 'rgb(153, 153, 153)'};
    text-decoration: none;
  }
`

const FormButtonGroup = styled.div`

`

const FormSocialGroup = styled.div`

`

const SignInButton = styled.button`
  width: 100%;
  height: 45px;
  border: none;
  background-color: #2979ff;
  color: white;
`

class SignIn extends Component {
  render() {
    return (
      <SignInForm>
        <Header>
          <h4>상품을 해시태그로</h4>
          <p style={{ color: '#2979ff', fontSize: '13px' }}>지금 #해시태그를 원하면</p>
        </Header>
        <Form>
          <FormAlign>
            <FormInputGroup>
              <FormInput placeholder="아이디 / 이메일" />
            </FormInputGroup>
            <FormInputGroup>
              <FormInput placeholder="비밀번호" />
            </FormInputGroup>
            <FormInformation>
              <InformationLink to="/">아이디/비밀번호 찾기</InformationLink>
              <InformationLink to="/signup" color="#2979ff" style={{ marginLeft: '18px' }}>회원가입</InformationLink>
            </FormInformation>
            <FormButtonGroup>
              <SignInButton>로그인</SignInButton>
              <FormSocialGroup>
                {/* 소셜 로그인 구현 예정 */}
              </FormSocialGroup>
            </FormButtonGroup>
          </FormAlign>
        </Form>
      </SignInForm>
    )
  }
}

export default SignIn;