import styled from 'styled-components';
import logoPic from '../../statics/nav-log.png'

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0; 
  position: relative;
  z-index: 1;
`;

export const Logo = styled.div`
  height: 56px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
  height: 100%;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.action {
    color: #ea6f5a;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: 'Search'
})`
  width: 160px;
  height: 38px;
  font-size: 14px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  color: #666;
  &::placeholder {
    color: #999;
  };
  &.focused {
    width:240px;
  }
  &.slide-enter {
    width: 160px;
    transition: all .2s ease-out
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out
  }
  &.slide-exit-active{
    width: 160px;
  } 
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  height:38px;
  margin-right: 20px;
  line-height: 38px;
  padding: 0 15px;
  box-sizing: border-box;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 17px;
  &.reg {
    color: #ec6149
  };
  &.writting {
    color: #fff;
    background: #ec6149;
  };
  .iconfont {
    margin-right: 5px;
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .zoom {
    position: absolute;
    right: 7px;
    bottom: 5px;
    width: 30px;
    line-height: 28px;
    border-radius: 15px;
    text-align: center;
    &.focused{
      background: #777;
      color: #fff
    }
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 20px;
  top: 57px;
  width: 240px;
  padding: 0 20px;
  border-radius: 7px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background: #fff;
  &.focused_display {
    display:none;
  }
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom :15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`;

export const SearchInfoItem = styled.a`
  font-size: 11px;
  padding: 0 5px;
  line-height: 20px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  display: block;
  float: left;
  margin-right: 8px;
  margin-bottom: 10px;
`;

export const SearchInfoList = styled.div`
`;