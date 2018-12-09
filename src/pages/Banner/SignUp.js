import React, { Component } from 'react'
import { Route, Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Swal from 'sweetalert2'

const SignUpForm = styled.div`
  padding-top: 150px;
`

const Header = styled.div`
  width: 100%;
  padding-left: 70px;
  float: left;
  text-align: left;
  line-height: 5px;
`

const PhaseForm = styled.div`
  padding-top: 10%;
`

const LineSeparator = styled.div`
  position: fixed;
  width: 340px;
  height: 1px;
  background-color: #222;
  margin: 43px 0 30px 158px;
`

const TermForm = styled.div`
  margin-top: 100px;
  padding-left: 70px;
  padding-right: 70px;
  text-align: left;
`

const Term = styled.div`
  padding: 3px 0 3px 0;
  padding-top: ${ props => props.allAgree && '14px' };
`

const Information = styled.div`
  padding-top: 3px;
`

const CheckBox = styled.input`
  top: 0;
  left: 0;
  background-color: #eee;
`

const ButtonForm = styled.div`
  padding-top: 20px;
`

const Button = styled.button`
  width: 100%;
  height: 43px;
  border: none;
  border-radius: 30px;
  background-color: #2979ff;
  font-size: 17px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
`

const FormInput = styled.input`
  border: none;
  border-bottom: 2px solid black;
  width: 100%;
  font-size: 24px;
  color: black;
  font-weight: 200;
  background-color: transparent;
`

const FormInputGroup = styled.div`
  padding-bottom: 40px;
`

const SubInformation = styled.p`
  padding-top: 3px;
  font-size: 10px;
  color: #999;
`

const Verify = styled.button`
  float: right;
  background-color: #fff;
  border-radius: 30px;
  font-size: 11px;
  z-index: 20;
  padding: 3px 5px;
  /* position: absolute; */
  margin-top: -38px;
  border: 1px solid #ccc;
  color: #999;
`

/**
 * terms - 이용약관 동의
 * policy - 개인정보 취급방침 동의
 * all - 모두 동의
 */

class Phase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: false,
      policy: false,
      allAgree: false
    }
  }

  handleCheck = (e) => {
    if ([e.target.name] == 'allAgree') {
      this.setState({
        terms: e.target.checked,
        policy: e.target.checked
      })
    }
    this.setState({
      [e.target.name]: e.target.checked
    })
  }

  nextButton = () => {
    if (this.state.terms === true && this.state.policy === true) {
      //TODO::  next page function
      console.log('terms: true, policy: true')
      this.props.history.push('/signup/form?agree=true')
    } else {
      Swal('다음 단계로 넘어가시려면 모든 사항에 동의를 해주시기 바랍니다!')
      return 0
    }
  }

  render() {
    console.log(this.state)
    return (
      <SignUpForm>
        <PhaseForm>
          <div>
            <Header>
              <h4>매일매일 새로운</h4>
              <p style={{ color: '#2979ff', fontSize: '13px' }}>#해시태그</p>
            </Header>
            <LineSeparator />
          </div>
          <TermForm>
            <Term>
              <CheckBox type="checkbox" name="terms" onChange={ this.handleCheck } checked={ this.state.terms } /> 이용약관 동의 (필수)
            </Term>
            <Term>
              <CheckBox type="checkbox" name="policy" onChange={ this.handleCheck } checked={ this.state.policy } /> 개인정보 취급방침 동의 (필수)
            </Term>
            <Term allAgree>
              <CheckBox type="checkbox" name="allAgree" onChange={ this.handleCheck } checked={ this.state.allAgree } /> 모두 동의
            </Term>
            <Information>
              <div style={{ color: '#2979ff', textDecoration: 'underline' }}>
                자세히보기
              </div>
              <p style={{ color: '#999', fontSize: '11px', paddingTop: '7px' }}>
                만 14세 이상만 서비스에 가입할 수 있습니다.<br />
                회원가입 시 이용약관과 개인정보 수집 및 이용에 동의하게<br />
                됩니다.
              </p>
            </Information>
            <ButtonForm>
              <Button onClick={ this.nextButton } >네, 동의합니다.</Button>
            </ButtonForm>
          </TermForm>
        </PhaseForm>
      </SignUpForm>
    )
  }
}

class PhaseConsent extends Component {
  render() {
    const _URL = new URLSearchParams(this.props.location.search);
    _URL.get('agree') !== 'true' && this.props.history.goBack()
    
    return (
      <PhaseForm>
        <div>
          <Header>
            <h4>고객님,</h4>
            <h4 style={{ fontWeight: 'bold', marginTop: '-10px' }}>반가워요!</h4>
          </Header>
        </div>
        <TermForm>
          <Information>
            <FormInputGroup>
              <FormInput placeholder="이름" />
            </FormInputGroup>
            <FormInputGroup>
              <FormInput placeholder="이메일" />
              <SubInformation>로그인 또는 비밀번호 재설정시 필요합니다.</SubInformation>
            </FormInputGroup>
            <FormInputGroup>
              <FormInput placeholder="비밀번호" />
            </FormInputGroup>
            <FormInputGroup>
              <FormInput placeholder="비밀번호 확인" />
              <SubInformation>6~24자 영문자 및 숫자 포함</SubInformation>
            </FormInputGroup>
            <FormInputGroup>
              <FormInput placeholder="핸드폰번호" /> <Verify>인증번호 요청</Verify>
            </FormInputGroup>
            <FormInputGroup>
              <FormInput placeholder="인증번호" /> <Verify>인증번호 확인</Verify>
            </FormInputGroup>
            <FormInputGroup>
              <FormInput placeholder="추천인 아이디/이메일" />
              <SubInformation>추천인 아이디를 입력하면 포인트를 드려요!</SubInformation>
            </FormInputGroup>
          </Information>
          <ButtonForm>
            <Button>회원가입</Button>
          </ButtonForm>
        </TermForm>
      </PhaseForm>
    )
  }
}

class SignUp extends Component {
  render() {
    return (
      <div>
        <Route exact="true" path="/signup" component={Phase} />
        <Route exact="true" path="/signup/form" component={PhaseConsent} />
      </div>
    )
  }
}

export default withRouter(SignUp);