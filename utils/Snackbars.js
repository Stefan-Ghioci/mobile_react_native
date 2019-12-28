import Snackbar from "react-native-snackbar";

export const showSuccess = message =>
  Snackbar.show({
    title: message,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: 'green'
  });
