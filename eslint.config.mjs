import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser },
rules:{ //aqui definem-se as regras do eslint, podem ser "off", "warn" ou "error"
  "no-unused-vars": "warn", //avisa sobre variáveis não usadas
  "semi": ["error", "always"], //exige ponto e vírgula no final de cada instrução
  "quotes": ["error", "double"], //exige aspas duplas para strings
  "eqeqeq": "error", //exige o uso de === e !== em vez de == e !=
  "no-console": "off" //permite o uso de console.log (útil para depuração)
}
},
]);
