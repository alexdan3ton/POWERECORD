import { TEST } from "./types";

const initialState = {
  tests: [
    { text: "Жим штанги лежа горизонтально" },
    { text: "Жим штанги в наклоне" },
    { text: "Жим гантелей лежа" },
    { text: "Разведение рук с гантелями" },
    { text: "Пуловер" },
    { text: "Сведение рук на нижнем блоке кроссовера" },
    { text: "Сведение рук в тренажере бабочка" },
    { text: "Отжимания на брусьях" },
    { text: "Хаммер" },
    { text: "Отжимания" },
  ],
};

export const testReducer = (state = initialState, action) => {
  console.log("test Reducer>", action);

  switch (action.type) {
    case TEST:
      return {
        ...state,
        tests: [...state.tests, action.text],
      };
    default:
      return state;
  }
};
