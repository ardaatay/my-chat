import { useState } from "react";
import { FormattedMessage } from "react-intl";

const Calculate = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    setSum(parseInt(number1) + parseInt(number2));
  };

  return (
    <div>
      <FormattedMessage id="hello" />
      <form>
        <div>
          <label>Number1:</label>
          <input value={number1} onChange={(e) => setNumber1(e.target.value)} />
        </div>
        <div>
          <label>Number2:</label>
          <input value={number2} onChange={(e) => setNumber2(e.target.value)} />
        </div>
        <button onClick={handleClick}>Sum</button>
      </form>
      <div>
        <span>{sum}</span>
      </div>
    </div>
  );
};

export default Calculate;
