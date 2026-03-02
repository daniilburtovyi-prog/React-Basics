// Потрібні імпорти
import styled, { ThemeProvider } from 'styled-components';
import React from 'react';

// --- 1. Основні стилізовані компоненти ---

// Завдання 1.1: StyledButton
export const StyledButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`;

// Завдання 1.2: StyledCard
export const StyledCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Завдання 1.3: StyledTitle
export const StyledTitle = styled.h1`
  color: #333;
  font-size: 24px;
  font-weight: bold;
`;

// --- 2. Реквізит та динамічне оформлення ---

// Завдання 2.1: StyledBox
export const StyledBox = styled.div`
  background-color: ${props => (props.primary ? 'blue' : 'gray')};
  color: white;
  padding: 15px;
`;

// Завдання 2.2: StyledText
export const StyledText = styled.p`
  font-size: ${props => props.size}px;
  color: black;
`;

// Завдання 2.3: StyledBadge
export const StyledBadge = styled.span`
  background-color: ${props => {
    switch (props.status) {
      case 'успішно':
        return 'green';
      case 'помилка':
        return 'red';
      default:
        return 'gray';
    }
  }};
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
`;

// --- 3. Розширення стилізованих компонентів ---

// Завдання 3.1: BaseButton та PrimaryButton
export const BaseButton = styled.button`
  padding: 10px 15px;
  border: none;
  cursor: pointer;
`;

export const PrimaryButton = styled(BaseButton)`
  background: blue;
  color: white;
`;

// Завдання 3.2: BaseCard та HighlightCard
export const BaseCard = styled.div`
  padding: 20px;
  border-radius: 8px;
`;

export const HighlightCard = styled(BaseCard)`
  border: 2px solid gold;
  background-color: #fffdf0;
`;

// --- 4. Стилізовані компоненти з темами ---

// Об'єкт теми
export const theme = {
  primary: '#007bff',
  secondary: '#6c757d',
};

// Завдання 4.1: ThemedButton
export const ThemedButton = styled.button`
  background: ${props => props.theme.primary};
  color: white;
  padding: 10px 20px;
  border: none;
`;

// Завдання 4.2: ThemedContainer
export const ThemedContainer = styled.div`
  background: ${props => props.theme.secondary};
  color: white;
  padding: 30px;
`;

// Компонент-обгортка ThemeProvider (для використання у застосунку)
// У вашому випадку, якщо файл src/components.js є лише для експорту стилів,
// ви можете просто експортувати `theme`, а `ThemeProvider` використовувати там, де це потрібно.
// Однак, для демонстрації, ось як це виглядало б у компоненті React:
/*
export function ThemedApp() {
  return (
    <ThemeProvider theme={theme}>
      <ThemedButton>Тематична кнопка</ThemedButton>
      <ThemedContainer>Тематичний контейнер</ThemedContainer>
    </ThemeProvider>
  );
}
*/

// --- 5. Розширені шаблони ---

// Завдання 5.1: HoverButton
export const HoverButton = styled.button`
  background: green;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  
  &:hover {
    background: darkgreen;
  }
`;

// Завдання 5.2: FlexContainer
export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
`;

// Завдання 5.3: ResponsiveText
export const ResponsiveText = styled.p`
  font-size: 14px; /* Стиль за замовчуванням для малих екранів */
  
  @media (min-width: 768px) {
    font-size: 18px; /* Стиль для екранів ширших за 768px */
  }
`;
