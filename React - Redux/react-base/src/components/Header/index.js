import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import * as S from './styles';

export default function Header() {
  return (
    <S.Nav>
      <a href="www.google.com">
        <FaHome size={24} />
      </a>
      <a href="www.google.com">
        <FaUserAlt size={24} />
      </a>
      <a href="www.google.com">
        <FaSignInAlt size={24} />
      </a>
    </S.Nav>
  );
}
