import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity, View, Alert } from 'react-native';
import { MatComIcons, MaterialIcon } from '../../components/Icon';
import colors from '../../styles/colors';
import register from '../../../assets/register.png';

import {
  Container,
  ContainerData,
  Input,
  ContainerInput,
  ContainerCheck,
  Text,
  Image,
} from './styles';
import { validateEmail } from '../../utils/helpers';
import { useApp } from '../../context/app';
import { createUserService } from '../../controller/auth';
import Button from '../../components/Button';

const Register = () => {
  const navigation = useNavigation();
  const { showToast } = useApp();

  const [check, setCheck] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [enterpriseName, setEnterpriseName] = useState('');
  const [document, setDocument] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheck = () => {
    setCheck(prev => !prev);
  };

  const handleRegister = () => {
    if (!email || !password) {
      showToast('Email e senha necessários', 'danger');
      return;
    }

    if (!confirmPassword) {
      showToast('Confirmação de senha necessária', 'danger');
      return;
    }

    if (!validateEmail(email)) {
      showToast('Email inválido', 'danger');
      return;
    }

    if (password.length < 6) {
      showToast('Senha inválida', 'danger');
      return;
    }

    if (password !== confirmPassword) {
      showToast('Senhas não conferem', 'danger');
      return;
    }

    setLoading(true);

    createUserService({ email, password })
      .then(() => {
        showToast('Usuário criado com sucesso', 'success');

        setTimeout(() => {
          setLoading(false);
          navigation.goBack();
        }, 1500);
      })
      .catch(() => {
        setLoading(false);
        showToast('Email ou senha inválidos', 'danger');
      });
  };

  return (
    <Container>
      <Image source={register} />
      <ContainerData>
        <Text size={30} bold color>
          Criar Conta
        </Text>
        <ContainerInput>
          <Input
            autoCapitalize="none"
            placeholder="E-mail"
            value={email}
            autoCorrect={false}
            onChangeText={(value: React.SetStateAction<string>) =>
              setEmail(value)
            }
          />
        </ContainerInput>

        <ContainerInput>
          <Input
            autoCapitalize="none"
            placeholder="Nome"
            value={name}
            autoCorrect={false}
            onChangeText={(value: React.SetStateAction<string>) =>
              setName(value)
            }
          />
        </ContainerInput>

        <ContainerInput>
          <Input
            autoCapitalize="none"
            placeholder="CNPJ"
            value={document}
            autoCorrect={false}
            onChangeText={(value: React.SetStateAction<string>) =>
              setDocument(value)
            }
          />
        </ContainerInput>

        <ContainerInput>
          <Input
            autoCapitalize="none"
            placeholder="Nome da empresa"
            value={enterpriseName}
            autoCorrect={false}
            onChangeText={(value: React.SetStateAction<string>) =>
              setEnterpriseName(value)
            }
          />
        </ContainerInput>

        <ContainerInput>
          <Input
            autoCapitalize="none"
            placeholder="Telefone"
            value={phone}
            autoCorrect={false}
            onChangeText={(value: React.SetStateAction<string>) =>
              setPhone(value)
            }
          />
        </ContainerInput>

        <ContainerInput>
          <Input
            placeholder="Senha"
            secureTextEntry
            autoCorrect={false}
            value={password}
            autoCapitalize="none"
            onChangeText={(value: React.SetStateAction<string>) =>
              setPassword(value)
            }
          />
        </ContainerInput>

        <ContainerInput>
          <Input
            placeholder="Confirmar senha"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            value={confirmPassword}
            onChangeText={(value: React.SetStateAction<string>) =>
              setConfirmPassword(value)
            }
          />
        </ContainerInput>

        <ContainerCheck>
          <TouchableOpacity onPress={handleCheck}>
            <MaterialIcon
              name={!check ? 'radio-button-unchecked' : 'check-circle'}
              size={25}
              color={colors.orange}
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10, fontSize: 12 }}>
            Eu aceito os Termos de Serviço e Politicas de Privacidade
          </Text>
        </ContainerCheck>

        <Button onPress={handleRegister} loading={loading} bottom="10%" />
      </ContainerData>
      <View style={{ left: 15, top: '12%', position: 'absolute' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MatComIcons name="keyboard-backspace" size={35} color="#551FA4" />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Register;
