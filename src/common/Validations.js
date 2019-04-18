import moment from "moment";

export const required = value =>
  value === null || value === "" || value === undefined
    ? "Campo requerido"
    : undefined;

export const textLength = value =>
  value !== undefined
    ? (value.length > 45
        ? "El nombre solo puede tener hasta 45 caracteres."
        : undefined) ||
      (value.length < 3
        ? "El nombre debe tener al menos 3 caracteres."
        : undefined)
    : undefined;

export const dateIsSameOrAfterToday = value =>
  moment(value).isSameOrAfter(moment(), "day") === true
    ? undefined
    : "La fecha es anterior a la actual.";

export const fromDatetimeIsBeforeToDatetimeForm = (value, allValues) => {
  let fromDate = moment(value);
  let fromTime = moment(allValues.from_time);
  fromDate.set({
    hour: fromTime.get("hour"),
    minute: fromTime.get("minute")
  });
  let toDate = moment(allValues.to_date);
  let toTime = moment(allValues.to_time);
  toDate.set({
    hour: toTime.get("hour"),
    minute: toTime.get("minute")
  });
  if (fromDate.isBefore(toDate) === true) {
    return undefined;
  } else {
    return "La fecha/hora desde debe ser anterior a la fecha/hora hasta.";
  }
};

export const fromDatetimeIsBeforeToDatetime = (
  fromDate,
  fromTime,
  toDate,
  toTime
) => {
  let _fromDate = moment(fromDate);
  let _fromTime = moment(fromTime);
  _fromDate.set({
    hour: _fromTime.get("hour"),
    minute: _fromTime.get("minute")
  });
  let _toDate = moment(toDate);
  let _toTime = moment(toTime);
  _toDate.set({
    hour: _toTime.get("hour"),
    minute: _toTime.get("minute")
  });
  return _fromDate.isBefore(_toDate);
};

export const datetimeIsBetween = (date, from, to) =>
  moment(date).isBetween(from, to, "minute", "[]");

export const username = value =>
  value !== undefined
    ? (value.length > 45
        ? "El Usuario solo puede tener hasta 45 caracteres."
        : undefined) ||
      (value.length < 3
        ? "El Usuario debe tener al menos 3 caracteres."
        : undefined)
    : undefined;

export const password = value =>
  value !== undefined
    ? (value.length > 50
        ? "La contraseña solo puede tener hasta 50 caracteres."
        : undefined) ||
      (value.length < 6
        ? "La contraseña debe tener al menos 6 caracteres."
        : undefined)
    : undefined;

export const typeInteger = value => {
  let regexInteger = /^[1-9]\d*?$/;
  if (value) {
    return regexInteger.test(value)
      ? null
      : "Este campo solo admite números enteros.";
  } else {
    return value;
  }
};
export const typeIntegerOrDecimal = value => {
  console.log("value", value);
  let regexIntegerOrDecial = /^[1-9]\d*(\.\d+)?$/;
  if (value) {
    return regexIntegerOrDecial.test(value)
      ? null
      : "Este campo solo admite números enteros o decimales.";
  } else {
    return value;
  }
};
export const onlyWords = value => {
  let regexWordsAndSpacesBetween = /^[a-zA-Z]+( [a-zA-Z]+)*$/; //^[a-zA-Z ]+$/;
  if (value) {
    return regexWordsAndSpacesBetween.test(value)
      ? null
      : "Este campo solo admite letras.";
  } else {
    return value;
  }
};
export const validateEmail = value => {
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (value) {
    return emailRegex.test(value) ? null : "Correo electrónico inválido.";
  } else {
    return null;
  }
};
export const confirmPassword = (value, password) => {
  if (password) {
    if (value) {
      return password === value ? null : "Las contraseñas no coinciden.";
    } else {
      return null;
    }
  } else {
    return "Debe escribir una contraseña.";
  }
};
