import styled from "styled-components";

export const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  left: 0;
  color: #fff;
  z-index: 999;
`;

export const Container = styled.div`
  padding: 1.2rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.span`
  font-weight: 500;
  font-size: 1.1rem;
  flex: 1;
  cursor: pointer;
`;

export const Bar = styled.img`
  height: 14px;
  padding-left: 2rem;
`;

export const Links = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  margin: 0;
  justify-content: flex-end;

  li {
    list-style: none;
    padding: 0 1rem;
    a {
      text-decoration: none;
      cursor: pointer;
      font-weight: 500;
	&:hover{
color:#ec1763;
}
    }
  }
`;
