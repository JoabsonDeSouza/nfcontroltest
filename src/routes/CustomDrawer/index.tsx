/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';

import * as S from './styles';

import { useApp } from '../../context/app';
import { ICON_NAME } from './icons';
import Avatar from '../../components/Avatar';

const CustomSidebarMenu = (props: any) => {
  const { theme, logOut } = useApp();

  const handleLogOut = () => {
    logOut();
  };

  return (
    <S.ScrollContainer>
      <S.Container>
        <S.ContainerHeader>
          <Avatar />
          <S.ContainerUser>
            <S.Title>NF Control Test</S.Title>
            <S.ContainerIconLogin></S.ContainerIconLogin>
          </S.ContainerUser>
        </S.ContainerHeader>
        <S.ContainerItems>
          <S.ContainerListItems>
            {props.state.routes.map((item: any, index: number) => {
              return (
                <S.ItemContainer
                  key={index}
                  isActive={index === props.state.index}
                  onPress={() => props.navigation.navigate(item.name)}>
                  <S.Icon
                    name={ICON_NAME[item.name]}
                    isActive={index === props.state.index}
                  />
                  <S.ItemText isActive={index === props.state.index}>
                    {item.name}
                  </S.ItemText>
                </S.ItemContainer>
              );
            })}
          </S.ContainerListItems>

          <S.ContainerPreferences>
            <S.ItemContainer
              isActive={false}
              disabled
              style={{ marginTop: 10 }}>
              <S.Icon name={'gear'} />
              <S.ItemText isActive={false}>Configurações</S.ItemText>
            </S.ItemContainer>

            <S.ContainerTheme>
              <S.ItemText
                isActive={false}
                style={{ marginLeft: 10 }}>{`Tema: ${theme}`}</S.ItemText>
            </S.ContainerTheme>
            <S.ItemText isActive={false} />
          </S.ContainerPreferences>
          <S.ItemContainer
            isActive={false}
            style={{ marginTop: 10 }}
            onPress={handleLogOut}>
            <S.Icon name={'sign-out'} />
            <S.ItemText isActive={false}>Sair</S.ItemText>
          </S.ItemContainer>
        </S.ContainerItems>
      </S.Container>
    </S.ScrollContainer>
  );
};

export default CustomSidebarMenu;
