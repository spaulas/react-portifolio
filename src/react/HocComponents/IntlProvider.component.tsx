import { ExplicitAny, RootReducerState } from "../../global";
import React, { PropsWithChildren, memo } from "react";
import { IntlProvider } from "react-intl";
import deDEIntl from "../Languages/de-DE.json";
import enUSIntl from "../Languages/en-US.json";
import esESIntl from "../Languages/es-ES.json";
import ptBRIntl from "../Languages/pt-BR.json";
import { useSelector } from "react-redux";

function TranslatorIntlProvider({ children }: PropsWithChildren<{}>) {
  const language = useSelector(
    ({ Website }: RootReducerState) => Website.language || "en-US"
  );

  const messages: ExplicitAny = {
    en: enUSIntl,
    pt: ptBRIntl,
    es: esESIntl,
    de: deDEIntl
  };

  const finalLanguage = language.split("-")[0]; // language without region code

  return (
    <IntlProvider locale={finalLanguage} messages={messages[finalLanguage]}>
      {children}
    </IntlProvider>
  );
}

export default memo(TranslatorIntlProvider);
