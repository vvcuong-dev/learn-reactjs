class Validate {
  constructor() {
    this.errors = {};
  }

  isEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Chạy validate, trả về true nếu hợp lệ, false nếu có lỗi
  run = (formData, rules, messages) => {
    this.errors = {}; // reset lỗi cũ mỗi lần validate lại

    Object.keys(rules).forEach((fieldName) => {
      const value = formData[fieldName];
      const rulesArray = rules[fieldName].split("|");

      rulesArray.forEach((rule) => {
        // Nếu field này đã có lỗi rồi thì bỏ qua, chỉ hiện 1 lỗi đầu tiên/field
        if (this.errors[fieldName]) return;

        if (rule === "required" && !value) {
          this.errors[fieldName] = messages[`${fieldName}.required`];
        }

        if (rule === "email" && value && !this.isEmail(value)) {
          this.errors[fieldName] = messages[`${fieldName}.email`];
        }

        if (rule.startsWith("min:")) {
          const minLength = Number(rule.split(":")[1]);
          if (value && value.length < minLength) {
            this.errors[fieldName] = messages[`${fieldName}.min`];
          }
        }
      });
    });

    return Object.keys(this.errors).length === 0;
  };
}

export default Validate;
