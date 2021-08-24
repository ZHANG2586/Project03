import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
// import './login.css'
import axios from 'axios'
// import Register from './Register';
import {useCookies}  from 'react-cookie';
import { OmitProps } from 'antd/lib/transfer/ListBody';
const isPoneAvailable = (poneInput)=>{
  var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  if (myreg.test(poneInput)) {
    return true;
  } else {
    return false;
  }
}
const Login = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(['username']);
  const onFinish = (values) => {
    let testPhone = isPoneAvailable(values.username)
    if(testPhone){
      axios.post('http://localhost:3040/login',values)
      .then((resdata)=>{
          console.log(resdata)
          let code = resdata.data.code;
          let msg = resdata.data.msg; 
          if(code == -1){
            alert(msg)
          }
          else if(code == 1){
            let token = resdata.data.token;
            console.log(token)
            setCookie('username',token)
            alert(msg)

            props.history.push({
              pathname:'/homepage',
              query:values.username
            }
              )
          }
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    else{
      alert('请检查手机号是否正确')
    }
   
    console.log('Received values of form: ', values);
  };

  return (
    <Form name="normal_login" className="login-form userSet" initialValues={{remember: true,}}
      onFinish={onFinish}
    >
      <Form.Item    name="username" rules={[ { required: true,message: 'Please input your Username!',},]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true,message: 'Please input your Password!', },]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
         {/* 忘记密码功能正在开发 */}
        <a className="login-form-forgot" href="" onClick={()=>{alert("忘记密码功能正在开发中")}}>
                Forgot password
        </a>
      </Form.Item>

      <Form.Item>
          <div className="login-And-register">
            <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
            </Button>
        {/* </Button>   <Button type="primary" htmlType="button"  className="login-form-button"> */}
            <Link to="/register"> Or register now!</Link>
         </div>
      </Form.Item>
    </Form>
  );
};
export default Login;