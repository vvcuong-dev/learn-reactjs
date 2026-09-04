import { useContext } from "react";
import { AppContext } from "../App";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(AppContext);

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <button onClick={handleChangeTheme}>
        Change {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
}

/**
 * Context có thay đổi khi render component không?
 *  - Khi context thay đổi, tất cả các component con sử dụng context đó sẽ được render lại.
 *  - Khi context thay đổi, component cha không bị render lại.
 *
 * nghĩa là trong trường hợp này, khi theme thay đổi, component ThemeToggle và Content sẽ được render lại, nhưng component Theme sẽ không bị render lại. nhưng mà tôi thấy component Theme cũng được render lại, tại sao vậy?
 *  - giải thích: Khi context thay đổi, tất cả các component con sử dụng context đó sẽ được render lại. Nhưng component cha không bị render lại. Tuy nhiên, trong trường hợp này, component Theme cũng được render lại vì nó sử dụng context AppContext. Khi theme thay đổi, component Theme sẽ được render lại để cập nhật giao diện theo theme mới.
 */
