import { useState } from "react";
import Calculate from "./components/Calculate";
import { IntlProvider } from "react-intl";
import messages from "./i18n/language";

const App = () => {
  const [locale, setLocale] = useState("tr-TR");
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <select value={locale} onChange={(e) => setLocale(e.target.value)}>
        <option value="tr-TR">tr-TR</option>
        <option value="en-US">en-US</option>
      </select>
      <Calculate />
    </IntlProvider>
  );
};

export default App;
